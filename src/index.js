import React from 'react'
import ReactDOM from 'react-dom'
import TrendyScatterPlot from './TrendyScatterPlot'

import './styles.css'

function App() {
	const colors = ['#019FCA', '#5821C7']
	const series = [
		{
			type: 'scatter',
			name: 'Starts',
			data: [
				['11/1/2019', 5],
				['11/2/2019', 6],
				['11/5/2019', 1],
				['11/7/2019', 9],
				['11/12/2019', 10],
				['11/15/2019', 12],
				['11/20/2019', 4],
				['11/22/2019', 10],
				['11/26/2019', 20],
				['11/30/2019', 40],
			],
		},
		{
			type: 'scatter',
			name: 'Completions',
			data: [
				['11/1/2019', 3],
				['11/2/2019', 2],
				['11/5/2019', 1],
				['11/7/2019', 3],
				['11/12/2019', 8],
				['11/15/2019', 10],
				['11/20/2019', 3],
				['11/22/2019', 3],
				['11/26/2019', 15],
				['11/30/2019', 34],
			],
		},
	]
	return (
		<div className="App">
			<TrendyScatterPlot colors={colors} series={series} />
		</div>
	)
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
