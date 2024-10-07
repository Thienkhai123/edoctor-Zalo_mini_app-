import React from "react"
import { Box, Button, Text, useNavigate } from "zmp-ui"
import SendDoneIcon from "../../../../share-components/icons/sendDoneIcon"

const SendDoneCreateFamilyContainer = () => {
	const navigate = useNavigate()
	return (
		<Box>
			<div className="my-2 ">
				<Text className="text-base font-normal text-center">
					Thêm hồ sơ gia đình
				</Text>
			</div>
			<div className="flex justify-center mt-[35px]">
				<SendDoneIcon />
			</div>
			<Text className="text-base font-normal text-center mt-6">
				Đã gửi yêu cầu thành công !
			</Text>
			<div className="flex justify-center mt-10">
				<Button
					onClick={() => {
						navigate("/profile")
					}}
					className=" text-base w-[152px] text-white bg-[#1479FF] font-bold text-center rounded-[10px] mx-[10px]"
				>
					Trở về
				</Button>
			</div>
		</Box>
	)
}

export default SendDoneCreateFamilyContainer
