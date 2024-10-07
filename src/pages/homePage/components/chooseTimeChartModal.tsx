import React from "react"
import TimePicker from "../../../share-components/TimePicker"
import { PickerColumnOption } from "zmp-ui/picker"
import { showError } from "../../../store/helper/utilitiesFunction"

const ChooseTimeChartModal = (props: {
	handleModalChooseTimeChart: () => void
	onChange: (value: { [name: string]: PickerColumnOption }) => void
	onChangeTimeFist: (value: { [name: string]: PickerColumnOption }) => void
	onChangeTimeSeccond: (value: { [name: string]: PickerColumnOption }) => void
	onChangeDate: (value: Date, pickedValue: [name: string]) => void
	dateTime: any
	chooseDayChart: any
	chooseDataChartDay: any
	setChooseTimeVisible: any
	fetchChartDataRecord: (
		healthCareFilter: number,
		period: number,
		timeStart?: string,
		timeEnd?: string
	) => void
}) => {
	const {
		onChange,
		onChangeTimeFist,
		onChangeTimeSeccond,
		dateTime,
		chooseDayChart,
		chooseDataChartDay,
		handleModalChooseTimeChart,
		fetchChartDataRecord,
		setChooseTimeVisible,
	} = props

	const valueTimeFirst = {
		hour: dateTime.timeFist.timeHour,
		minute: dateTime.timeFist.timeMinite,
	}
	const valueTimeSeccond = {
		hour: dateTime.timeSeccond.timeHour,
		minute: dateTime.timeSeccond.timeMinite,
	}

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

	const handleFetchChartDataRecord = () => {
		if (
			dateTime.timeFist.timeHour !== 0 ||
			dateTime.timeSeccond.timeHour !== 0 ||
			dateTime.timeFist.timeMinite !== 0 ||
			dateTime.timeSeccond.timeMinite !== 0
		) {
			fetchChartDataRecord(
				chooseDataChartDay,
				chooseDayChart,
				`2024-05-21T${convertTimeFirst.timeHour}:${convertTimeFirst.timeMinite}:06.651Z`,
				`2024-05-21T${convertTimeSeccond.timeHour}:${convertTimeSeccond.timeMinite}:06.651Z`
			)
			setChooseTimeVisible(false)
		} else {
			showError("Vui lòng chọn thời gian!")
		}
	}

	return (
		<div>
			<div className="mx-auto w-[200px]">
				<p className="text-center font-bold text-sm">
					Xem chỉ số sức khỏe trong khoảng thời gian
				</p>
			</div>
			<div className="grid grid-rows-2 gap-[10px] mt-5">
				<div>
					<p className="text-sm">Từ</p>
					<TimePicker
						onChange={onChangeTimeFist}
						value={valueTimeFirst}
					/>
				</div>
				<div>
					<p className="text-sm">Đến</p>
					<TimePicker
						onChange={onChangeTimeSeccond}
						value={valueTimeSeccond}
					/>
				</div>
			</div>
			<div className="my-4 flex gap-2 border-t mt-10">
				<input
					value="Đóng"
					type="submit"
					onClick={() => handleModalChooseTimeChart()}
					className="text-sm w-full text-white bg-[#DE3B40] font-bold text-center rounded-lg h-[48px]"
				/>
				<input
					value="Lưu"
					type="submit"
					onClick={() => {
						handleFetchChartDataRecord()
					}}
					className=" text-sm w-full text-white bg-[#1479FF] font-bold text-center rounded-lg h-[48px]"
				/>
			</div>
		</div>
	)
}

export default ChooseTimeChartModal
