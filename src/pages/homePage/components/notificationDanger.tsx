import React from "react"
import IconCustom from "../../../share-components/icons/IconsCustom"
import { Box, Text } from "zmp-ui"

const DangerRick1 = () => {
	return (
		<div className="flex justify-center ">
			<div className=" min-w-[123px] w-full rounded-[10px] bg-[#820014] mt-1  p-1">
				<div className="flex gap-2 justify-center -ml-[40px]">
					<IconCustom name="waringIcon" />
					<Text className="text-[16px] text-white text-center">
						Cảnh báo:
					</Text>
				</div>
				<Box>
					<Text className="text-[16px] text-white uppercase text-center">
						NGUY CƠ RẤT CAO
					</Text>
				</Box>
			</div>
		</div>
	)
}

const DangerRick2 = () => {
	return (
		<div className="flex justify-center ">
			<div className=" min-w-[123px] w-full rounded-[10px] bg-[#ff0029] mt-1  p-1">
				<div className="flex gap-2 justify-center -ml-[40px]">
					<IconCustom name="waringIcon" />
					<Text className="text-[16px] text-white text-center">
						Cảnh báo:
					</Text>
				</div>
				<Box>
					<Text className="text-[16px] text-white uppercase text-center">
						Nguy cơ cao
					</Text>
				</Box>
			</div>
		</div>
	)
}

const DangerRick3 = () => {
	return (
		<div className="flex justify-center ">
			<div className=" min-w-[123px] w-full rounded-[10px] bg-[#ffcf6b] mt-1  p-1">
				<div className="flex gap-2 justify-center -ml-[40px]">
					<IconCustom name="waringIcon" />
					<Text className="text-[16px] text-white text-center">
						Cảnh báo:
					</Text>
				</div>
				<Box>
					<Text className="text-[16px] text-white uppercase text-center">
						Nguy cơ trung bình
					</Text>
				</Box>
			</div>
		</div>
	)
}

const DangerRick4 = () => {
	return (
		<div className="flex justify-center ">
			<div className=" min-w-[123px] w-full rounded-[10px] bg-[#ffff6b] mt-1  p-1">
				<div className="flex gap-2 justify-center -ml-[40px]">
					<IconCustom name="waringIcon" />
					<Text className="text-[16px] t text-center ">
						Cảnh báo:
					</Text>
				</div>
				<Box>
					<Text className="text-[16px]  uppercase text-center">
						Nguy cơ thấp
					</Text>
				</Box>
			</div>
		</div>
	)
}

const DangerRick5 = () => {
	return (
		<div className="flex justify-center ">
			<div className=" min-w-[123px] w-full rounded-[10px] bg-[#00b6a4] mt-1  p-1">
				<div className="flex gap-2 justify-center -ml-[40px]">
					<IconCustom name="waringIcon" />
					<Text className="text-[16px] text-white text-center">
						Cảnh báo:
					</Text>
				</div>
				<Box>
					<Text className="text-[16px] text-white uppercase text-center">
						Nguy cơ rất thấp
					</Text>
				</Box>
			</div>
		</div>
	)
}

const DangerRick6 = () => {
	return (
		<div className="flex justify-center ">
			<div className=" min-w-[123px] w-full rounded-[10px] bg-neutral-500 mt-1  p-1">
				<div className="flex gap-2 justify-center -ml-[40px]">
					<IconCustom name="waringIcon" />
					<Text className="text-[16px] text-white text-center">
						Cảnh báo:
					</Text>
				</div>
				<Box>
					<Text className="text-[16px] text-white uppercase text-center">
						Chưa xác định
					</Text>
				</Box>
			</div>
		</div>
	)
}

const NotificationDanger = (props: { rick: number }) => {
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
			return <DangerRick6 />
	}
}

export default NotificationDanger
