import React, { useState } from "react"
import { Box, Text } from "zmp-ui"
import DangerComponent from "../components/dangerComponent"
import DangerMinComponent from "../components/dangerMinComponent"

const DangerContainer = () => {
	const [keyActive, setKeyActive] = useState({
		key: "",
		type: "",
	})

	const handleKeyActive = (key = "", type = "") => {
		if (key !== "") {
			setKeyActive({
				key: key,
				type: type,
			})
		}
	}
	return (
		<>
			<Box className="mx-2">
				<Text className="text-2xl font-bold my-3">
					Các yếu tố nguy cơ
				</Text>
				<Text className="text-base font-medium  ">
					Các yếu tố nguy cơ*
				</Text>
				<div className="mt-4">
					<DangerComponent
						key="RLCHLP"
						handleKeyActive={handleKeyActive}
						keyActive={keyActive}
					/>
					<DangerMinComponent />
					<DangerComponent
						key="HTL"
						handleKeyActive={handleKeyActive}
						keyActive={keyActive}
						title="Hút thuốc lá"
					/>
				</div>
				<Text className="text-base font-medium  ">
					Tổn thương cơ quan đích
				</Text>
				<div className="mt-4">
					<DangerComponent
						key="SAT"
						handleKeyActive={handleKeyActive}
						keyActive={keyActive}
						title="Phì đại thất trái trên siêu âm tim hoặc điện tim"
					/>
					<DangerComponent title="Có Albumin/Microalbumin niệu" />
					<DangerComponent title="Có tổn thương đáy mắt" />
				</div>
				<Text className="text-base font-medium  ">
					Bệnh lý mạn tính kèm theo
				</Text>
				<div className="mt-4">
					<DangerComponent title="Suy thận giai đoạn 3, 4" />
					<DangerComponent title="Đái tháo đường" />
					<DangerComponent title="Đột quỵ não" />
					<DangerComponent title="Suy tim" />
					<DangerComponent title="Rung nhĩ" />
				</div>
			</Box>
		</>
	)
}

export default DangerContainer
