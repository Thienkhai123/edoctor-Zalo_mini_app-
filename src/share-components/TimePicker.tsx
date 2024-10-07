import React from "react"
import { Icon, Picker } from "zmp-ui"
import { PickerColumnOption } from "zmp-ui/picker"

type TimePickerValue = {
	hour: number
	minute: number
}

const TimePicker = (props: {
	value?: TimePickerValue
	minHour?: number
	maxHour?: number
	onChange: (value: { [name: string]: PickerColumnOption }) => void
}) => {
	const {
		value = { hour: 8, minute: 0 },
		minHour = 0,
		maxHour = 23,
		onChange,
	} = props

	const range = (start: number, end: number, step: number = 1) => {
		return Array((end - start) / step + 1)
			.fill(undefined)
			.map((_, idx) => (start + idx) * step)
	}

	const hourList = range(minHour, maxHour)
	const minuteList = range(0, 59, 1)

	const addLeadingZero = (value: number): string =>
		value.toString().padStart(2, "0")

	const pickerDisplayName = (value: {
		[name: string]: PickerColumnOption
	}): string =>
		value["hour"] && value["minute"]
			? `${value["hour"].displayName} ${value["minute"].displayName}`
			: "N/A"

	return (
		<Picker
			title="Chọn thời gian"
			placeholder="Chọn thời gian"
			mask
			value={value}
			onChange={onChange}
			formatPickedValueDisplay={pickerDisplayName}
			suffix={<Icon icon="zi-clock-1" className="mr-2" />}
			data={[
				{
					options: hourList.map((x) => ({
						value: x,
						displayName: `${addLeadingZero(x)} giờ`,
					})),
					name: "hour",
				},
				{
					options: minuteList.map((x) => ({
						value: x,
						displayName: `${addLeadingZero(x)} phút`,
					})),
					name: "minute",
				},
			]}
		/>
	)
}

export default TimePicker
