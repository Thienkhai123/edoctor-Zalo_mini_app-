import React from "react"

const TimeChart = (props: {
	handleModalChooseTimeChart: () => void
	dateTime: any
	setChooseTimeChart: any
	chooseDataChartDay: any
	fetchChartDataRecord: (p0: number, p1: number) => void
}) => {
	const {
		fetchChartDataRecord,
		handleModalChooseTimeChart,
		dateTime,
		setChooseTimeChart,
		chooseDataChartDay,
	} = props

	const convertTimeFirst = {
		timeHour:
			dateTime.timeFist.timeHour > 9
				? dateTime.timeFist.timeHour
				: `0${dateTime.timeFist.timeHour}`,
		timeMinite:
			dateTime.timeFist.timeMinite > 9
				? dateTime.timeFist.timeMinite
				: `0${dateTime.timeFist.timeMinite}`,
	}

	const convertTimeSeccond = {
		timeHour:
			dateTime.timeSeccond.timeHour > 9
				? dateTime.timeSeccond.timeHour
				: `0${dateTime.timeSeccond.timeHour}`,
		timeMinite:
			dateTime.timeSeccond.timeMinite > 9
				? dateTime.timeSeccond.timeMinite
				: `0${dateTime.timeSeccond.timeMinite}`,
	}
	const findTime =
		dateTime.timeFist.timeHour === 0 &&
		dateTime.timeFist.timeMinite === 0 &&
		dateTime.timeSeccond.timeHour === 0 &&
		dateTime.timeSeccond.timeMinite === 0

	return (
		<div>
			{findTime ? (
				<p
					className="text-xs text-[#0051BD] font-normal"
					onClick={() => handleModalChooseTimeChart()}
				>
					Lọc thời gian
				</p>
			) : (
				<div className="rounded-[10px] p-[5px] bg-[#E1E1E1]  w-fit">
					<p className="flex justify-between gap-3 text-xs">
						Từ {convertTimeFirst.timeHour}:
						{convertTimeFirst.timeMinite} đến{" "}
						{convertTimeSeccond.timeHour}:
						{convertTimeSeccond.timeMinite}{" "}
						<div
							onClick={() => {
								setChooseTimeChart({
									timeFist: {
										timeHour: 0,
										timeMinite: 0,
									},
									timeSeccond: {
										timeHour: 0,
										timeMinite: 0,
									},
								})
								fetchChartDataRecord(chooseDataChartDay, 0)
							}}
						>
							x
						</div>
					</p>
				</div>
			)}
		</div>
	)
}

export default TimeChart
