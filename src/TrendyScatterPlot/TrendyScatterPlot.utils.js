import Highcharts from 'highcharts'
import moment from 'moment'

const generateScatterPlot = line => {
	return line.map(([date, point]) => {
		return [moment.utc(date).valueOf(), point]
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
		const chartData = data.map(({ date, y }) => [date, y])
		const scatterPlotData = generateScatterPlot(chartData)
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

const getPointsForDate = (pointDate, series) => {
	let points = []
	series.forEach(({ name, data }) => {
		const pointsForDate = data.filter(({ date }) => {
			return moment.utc(date).valueOf() === pointDate
		})
		points.push({ type: name, points: pointsForDate })
	})
	return points
}

export const createChart = (chartRef, colors, series) => {
	const parsedSeries = parseSeries(colors, series)
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
			series: {
				states: {
					inactive: {
						opacity: 1,
					},
				},
			},
		},
		tooltip: {
			crosshairs: true,
			headerFormat: '',
			pointFormatter: function() {
				const xDate = moment.utc(this.x).format('MM/DD/YYYY')
				let message = `<b>${xDate}</b><br> <br>`
				getPointsForDate(this.x, series).forEach(({ type, points }) => {
					message += `<b>${type}</b><br>`
					points.forEach(({ name, y }) => (message += `${name}: ${y}<br>`))
					message += ` <br>`
				})
				return message
			},
		},
		series: parsedSeries,
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
