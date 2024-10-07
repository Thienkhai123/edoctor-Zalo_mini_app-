import React, { useState } from "react"

interface IRenderTab {
	text?: string
	isActive?: boolean
	setActiveId?: () => void
}

const RenderTab = ({
	text = "Ngày",
	isActive = false,
	setActiveId = () => {},
}: IRenderTab) => {
	return (
		<div
			onClick={setActiveId}
			className={`rounded-3xl px-2 py-1 cursor-pointer ${
				isActive ? "bg-white" : ""
			}`}
		>
			<p className="text-center">{text}</p>
		</div>
	)
}

const TabComponent = (props: {
	chooseDataChartDay: number
	fetchChartDataRecord: (
		healthCareFilter: number,
		period: number,
		timeStart?: string,
		timeEnd?: string
	) => void
}) => {
	const { chooseDataChartDay, fetchChartDataRecord } = props
	const [activeId, setActiveId] = useState(1)
	const handleSetActiveId = (id: number) => {
		setActiveId(id)
	}

	return (
		<div className="grid grid-cols-3 bg-[#EFF0F4] rounded-3xl p-1">
			<div onClick={() => fetchChartDataRecord(chooseDataChartDay, 0)}>
				<RenderTab
					isActive={activeId === 1}
					setActiveId={() => handleSetActiveId(1)}
				/>
			</div>
			<div onClick={() => fetchChartDataRecord(chooseDataChartDay, 1)}>
				<RenderTab
					text="7 Ngày"
					isActive={activeId === 2}
					setActiveId={() => handleSetActiveId(2)}
				/>
			</div>
			<div onClick={() => fetchChartDataRecord(chooseDataChartDay, 2)}>
				<RenderTab
					text="30 Ngày"
					isActive={activeId === 3}
					setActiveId={() => handleSetActiveId(3)}
				/>
			</div>
		</div>
	)
}

export default TabComponent
