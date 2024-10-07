import React from "react"
import { Box, Button, Text, useNavigate } from "zmp-ui"

const SendRequestFamilyContainer = () => {
	const navigate = useNavigate()

	const handleSendAccessFamily = () => {
		navigate("/profile/famaly/create/sendRequest/Done")
	}

	return (
		<Box className="mx-5">
			<div className="my-2 ">
				<Text className="text-base font-normal text-center">
					Thêm hồ sơ gia đình
				</Text>
			</div>
			<div className="h-[43px] px-5 flex items-center gap-2 rounded-[10px] border border-[#E1E1E1] mt-10">
				<p className="text-sm font-normal">Mã y tế:</p>
				<p className="text-sm font-normal">01.21042024</p>
			</div>
			<div className="flex justify-center mt-10">
				<Button
					onClick={() => {
						handleSendAccessFamily()
					}}
					className=" text-base w-full text-white bg-[#1479FF] font-bold text-center rounded-[10px] mx-[10px]"
				>
					Gửi yêu cầu thêm hồ sơ gia đình
				</Button>
			</div>
		</Box>
	)
}

export default SendRequestFamilyContainer
