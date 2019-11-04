import Highcharts from 'highcharts'
import moment from 'moment'

const generateScatterPlot = line => {
	return line.map(([date, point]) => {
		const deconstructedDate = date.split('/')
		const newDate = Date.UTC(
			deconstructedDate[2],
			deconstructedDate[0] * 1 - 1,
			deconstructedDate[1] * 1,
		)
		return [newDate, point]
	})
}

const generateTrendline = line => {
	const dates = line.map(([date, _]) => date)
	const points = line.map(([_, point]) => point)
	const trendline = []
	for (let i = 0; i < points.length; i++) {
		if (i > 0) {
			const average = (points[i - 1] + points[i]) / 2
			trendline.push([dates[i], average])
		}
	}

	return trendline
}

const parseSeries = (colors, series) => {
	const parsedData = []
	series.forEach(({ data, name, ...restOfLine }, index) => {
		const scatterPlotData = generateScatterPlot(data)
		parsedData.push({
			name,
			marker: {
				fillColor: colors[index],
				symbol: 'circle',
			},
			data: scatterPlotData,
			...restOfLine,
		})
		const trendline = generateTrendline(scatterPlotData)
		parsedData.push({
			name: `${name} avg`,
			marker: {
				enabled: false,
			},
			color: colors[index],
			dashStyle: 'ShortDash',
			data: trendline,
		})
	})
	return parsedData
}

export const createChart = (chartRef, colors, series) => {
	Highcharts.chart(chartRef, {
		xAxis: {
			type: 'datetime',
		},
		yAxis: {
			visible: true,
			title: '',
		},
		title: {
			text: '',
		},
		plotOptions: {
			tooltip: {
				headerFormat: '<b>{series.name}</b><br>',
				pointFormatter: function() {
					return `${moment(this.x).format('MM/DD/YYYY')}: ${this.y}`
				},
			},
		},
		series: parseSeries(colors, series),
	})
}

/**
 * tooltip: {
 * 	 crosshairs: true,
 * 	 shared: true
 *   ----- or ----
 * 	 headerFormat: '<b>{series.name}</b><br>',
 * 	 pointFormatter: function() {
 * 	 	return `${moment(this.x).format('MM/DD/YYYY')}: ${this.y}`
 * 	 },
 * },
 */
