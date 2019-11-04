import React, { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import { createChart } from './TrendyScatterPlot.utils'

const TrendyScatterPlot = ({ colors, series }) => {
	const chartRef = useRef()

	useEffect(() => {
		createChart(chartRef.current, colors, series)
	})

	return <div ref={chartRef}>TrendyScatterPlot</div>
}

TrendyScatterPlot.propTypes = {
	colors: PropTypes.array,
	series: PropTypes.array,
}

export default TrendyScatterPlot
