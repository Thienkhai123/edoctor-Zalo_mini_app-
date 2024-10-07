import React from "react"
import {
	CategoryScale,
	Chart,
	LinearScale,
	PointElement,
	LineElement,
} from "chart.js"
import { Line } from "react-chartjs-2"

Chart.register(CategoryScale)
Chart.register(LinearScale)
Chart.register(PointElement)
Chart.register(LineElement)

const ChartComponent = (props: {
	bloodPressureFist: []
	bloodPressureSeccond: []
	barley: []
	bloodGlucoseFirst: []
	bloodGlucoseSecond: []
	chooseDataChartDay: 0
	dateTime: any
}) => {
	const {
		bloodPressureFist,
		bloodPressureSeccond,
		barley,
		bloodGlucoseFirst,
		bloodGlucoseSecond,
		chooseDataChartDay,
		dateTime,
	} = props

	const convertTimeFirst = {
		timeHour:
			dateTime?.timeFist?.timeHour > 9
				? dateTime?.timeFist?.timeHour
				: `0${dateTime?.timeFist?.timeHour}`,
		timeMinite:
			dateTime?.timeFist?.timeMinite > 9
				? dateTime?.timeFist?.timeMinite
				: `0${dateTime?.timeFist?.timeMinite}`,
	}

	const convertTimeSeccond = {
		timeHour:
			dateTime?.timeSeccond?.timeHour > 9
				? dateTime?.timeSeccond?.timeHour
				: `0${dateTime?.timeSeccond?.timeHour}`,
		timeMinite:
			dateTime?.timeSeccond?.timeMinite > 9
				? dateTime?.timeSeccond?.timeMinite
				: `0${dateTime?.timeSeccond?.timeMinite}`,
	}

	const dataBloodPressureChart = [
		{
			label: "First dataset",
			data: bloodPressureFist,
			fill: true,
			backgroundColor: "#0063AC",
			borderColor: "#0063AC",
		},
		{
			label: "Second dataset",
			data: bloodPressureSeccond,
			fill: false,
			backgroundColor: "#CA0027",
			borderColor: "#CA0027",
		},
	]

	const dataBarley = [
		{
			label: "Second dataset",
			data: barley,
			fill: false,
			backgroundColor: "#F92F69",
			borderColor: "#F92F69",
		},
	]

	const dataBloodGlucose = [
		{
			label: "Second dataset",
			data: bloodGlucoseFirst,
			fill: false,
			backgroundColor: "#5A08E7",
			borderColor: "#5A08E7",
		},
		{
			label: "Second dataset",
			data: bloodGlucoseSecond,
			fill: false,
			backgroundColor: "#DA70D6",
			borderColor: "#DA70D6",
		},
	]

	const renderTimeChart = () => {
		const timeChart: any = []
		for (let hour = 0; hour <= 24; hour++) {
			for (let minute = 0; minute <= 60; minute++) {
				const time = `${hour > 9 ? hour : `0${hour}`}:${
					minute > 9 ? minute : `0${minute}`
				}`
				timeChart.push(time)
			}
		}
		return timeChart
	}
	const timeDefault = [
		"00:00",
		"01:00",
		"02:00",
		"03:00",
		"04:00",
		"05:00",
		"06:00",
		"07:00",
		"08:00",
		"09:00",
		"10:00",
		"11:00",
		"12:00",
		"13:00",
		"14:00",
		"15:00",
		"16:00",
		"17:00",
		"18:00",
		"19:00",
		"20:00",
		"21:00",
		"22:00",
		"23:00",
		"24:00",
	]

	const data = {
		labels: timeDefault,
		datasets:
			chooseDataChartDay === 0
				? dataBloodPressureChart
				: chooseDataChartDay === 1
				? dataBarley
				: chooseDataChartDay === 2
				? dataBloodGlucose
				: dataBloodPressureChart,
	}

	const options = {
		scales: {
			x: {
				ticks: {
					callback: function (val, index) {
						if (index % 4 === 0) {
							if (parseInt(val) < 10) {
								return "0" + val + ":00"
							} else {
								return val + ":00"
							}
						}
					},
				},
			},
		},
	}

	return <Line data={data} options={options} />
}

export default ChartComponent
