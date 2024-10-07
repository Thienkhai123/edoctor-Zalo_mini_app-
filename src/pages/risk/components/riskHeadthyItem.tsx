import React from "react"
import { Text } from "zmp-ui"

const DangerRick1 = () => {
	return (
		<Text className="text-[10px] text-[#820014] mb-3">Nguy cơ rất cao</Text>
	)
}

const DangerRick2 = () => {
	return <Text className="text-[10px] text-[#ff0029] mb-3">Nguy cơ cao</Text>
}

const DangerRick3 = () => {
	return (
		<Text className="text-[10px] text-[#FA8C16] mb-3">
			Nguy cơ trung bình
		</Text>
	)
}

const DangerRick4 = () => {
	return (
		<Text className="text-[10px] text-[#ffcf6b] mb-3 ">Nguy cơ thấp</Text>
	)
}

const DangerRick5 = () => {
	return (
		<Text className="text-[10px] text-[#00b6a4] mb-3">
			Nguy cơ rất thấp
		</Text>
	)
}

const DangerRick6 = () => {
	return (
		<Text className="text-[10px]  text-neutral-500 mb-3">
			Chưa xác định
		</Text>
	)
}

const RiskHeadthyItem = (props: { rick: number }) => {
	const { rick } = props
	switch (rick) {
		case 1:
			return <DangerRick1 />
		case 2:
			return <DangerRick2 />
		case 3:
			return <DangerRick3 />
		case 4:
			return <DangerRick4 />
		case 5:
			return <DangerRick5 />
		case 6:
			return <DangerRick6 />
		default:
			break
	}
}

export default RiskHeadthyItem
