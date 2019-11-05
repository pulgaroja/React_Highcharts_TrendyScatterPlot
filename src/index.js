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
				{ date: '11/1/2019', y: 5, name: 'Education Mission' },
				{ date: '11/2/2019', y: 6, name: 'Voter Registration Mission' },
				{ date: '11/2/2019', y: 4, name: 'Sync Contacts Mission' },
				{ date: '11/2/2019', y: 7, name: 'Support Organization Mission' },
				{ date: '11/5/2019', y: 1, name: 'Education Mission' },
				{ date: '11/7/2019', y: 9, name: 'Email Sharing Mission' },
				{ date: '11/12/2019', y: 10, name: 'Text Sharing Missione' },
				{ date: '11/12/2019', y: 7, name: 'Education Mission' },
				{ date: '11/12/2019', y: 12, name: 'Contact Sync Mission' },
				{ date: '11/15/2019', y: 12, name: 'Support Organization Mission' },
				{ date: '11/20/2019', y: 4, name: 'Email Sharing Mission' },
				{ date: '11/22/2019', y: 10, name: 'Text Sharing Mission' },
				{ date: '11/26/2019', y: 20, name: 'Education Mission' },
				{ date: '11/30/2019', y: 40, name: 'Email Sharing Mission' },
			],
		},
		{
			type: 'scatter',
			name: 'Completions',
			data: [
				{ date: '11/1/2019', y: 3, name: 'Education Mission' },
				{ date: '11/2/2019', y: 1, name: 'Voter Registration Mission' },
				{ date: '11/2/2019', y: 3, name: 'Sync Contacts Mission' },
				{ date: '11/2/2019', y: 4, name: 'Support Organization Mission' },
				{ date: '11/5/2019', y: 1, name: 'Education Mission' },
				{ date: '11/7/2019', y: 3, name: 'Email Sharing Mission' },
				{ date: '11/12/2019', y: 8, name: 'Text Sharing Mission' },
				{ date: '11/12/2019', y: 4, name: 'Education Mission' },
				{ date: '11/12/2019', y: 9, name: 'Contact Sync Mission' },
				{ date: '11/15/2019', y: 10, name: 'Support Organization Mission' },
				{ date: '11/20/2019', y: 3, name: 'Email Sharing Mission' },
				{ date: '11/22/2019', y: 3, name: 'Text Sharing Mission' },
				{ date: '11/26/2019', y: 15, name: 'Education Mission' },
				{ date: '11/30/2019', y: 34, name: 'Email Sharing Mission' },
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
