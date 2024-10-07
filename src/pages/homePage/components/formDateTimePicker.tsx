import React from "react"
import { DatePicker } from "zmp-ui"
import TimePicker from "../../../share-components/TimePicker"
import { PickerColumnOption } from "zmp-ui/picker"

const FormDateTimePicker = (props: {
	onChange: (value: { [name: string]: PickerColumnOption }) => void
	onChangeDate: (value: Date, pickedValue: [name: string]) => void
	dateTime: any
}) => {
	const { onChange, onChangeDate, dateTime } = props

	const valueTime = {
		hour: dateTime.timeHour,
		minute: dateTime.timeMinite,
	}
	return (
		<>
			<div className="flex justify-between">
				<p className="text-sm">Thời gian ghi nhận</p>
			</div>
			<div className="flex gap-2">
				<div className="flex gap-2">
					<DatePicker
						mask
						maskClosable
						dateFormat="dd/mm/yyyy"
						title="Chọn ngày"
						value={dateTime.currentDate}
						onChange={onChangeDate}
					/>
					<TimePicker onChange={onChange} value={valueTime} />
				</div>
			</div>
		</>
	)
}

export default FormDateTimePicker
