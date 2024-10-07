import React, { useEffect, useState } from "react"
import { Box, Button, Text, useNavigate } from "zmp-ui"
import { loginByNumber } from "../../../../store/apis/home"
import {
	showError,
	showSuccess,
} from "../../../../store/helper/utilitiesFunction"
import { Scanner } from "@yudiel/react-qr-scanner"
import {
	getPatientById,
	sendFamilyInvitation,
} from "../../../../store/apis/profile"
import { getStorage } from "zmp-sdk/apis"

const InformationContainer = () => {
	const navigate = useNavigate()
	const [screen, setScreen] = useState(1)
	const [fromPatientId, setFromPatientId] = useState()
	const [toPatientId, setToPatientId] = useState()
	const [userFamily, setUserFamily] = useState<any>()
	const handleScan = async (text: any, result: any) => {
		if (text?.includes("patientId")) {
			setScreen(2)
			setToPatientId(text.split(":")[1])
			const res = await getPatientById({ patientId: text.split(":")[1] })
			if (res.isSuccess) {
				setUserFamily(res.data)
			}
		}
	}
	const handleClickAccept = async () => {
		const res = await sendFamilyInvitation({
			fromPatientId: fromPatientId,
			toPatientId: toPatientId,
		})
		if (res?.isSuccess) {
			showSuccess("Gửi lời mời thành công!")
		} else {
			showError(res?.errorMessage)
		}
		navigate("/profile")
	}

	useEffect(() => {
		const fetchUserData = async () => {
			try {
				const { phoneNumber } = await getStorage({
					keys: ["phoneNumber"],
				})
				const response = await loginByNumber({ phone: phoneNumber })
				if (response.isSuccess) {
					setFromPatientId(response?.data?.id)
				} else {
					showError("Không tìm thấy hồ sơ sức khỏe!")
				}
			} catch (error) {}
		}
		fetchUserData()
	}, [])

	return (
		<Box>
			{screen === 1 && (
				<div>
					<Scanner
						onResult={(text, result) => handleScan(text, result)}
						onError={(error) => console.log(error?.message)}
					/>
					<div className="mx-6">
						<Text className="text-base font-normal text-center mt-10">
							Scan QR code
						</Text>
						<Text className="text-base font-bold mt-10 ">
							Hướng dẫn:{" "}
							<span className="font-normal">
								Tại mục “Cá nhân” của người thân bạn muốn kết
								nối, vui lòng chọn QR code, sau đó đưa màn hình
								của người thân vào vùng quét QR.
							</span>
						</Text>
					</div>
				</div>
			)}

			{screen === 2 && (
				<Box>
					<Text className="text-sm font-bold text-center mt-3">
						{/* Xác nhận gửi lời mời tham gia hồ sơ gia đình? */}
						Thêm hồ sơ gia đình
					</Text>
					<div className="mt-5 px-2">
						<Text className="text-xs  text-center ">
							Bạn có muốn thêm {userFamily?.name} vào hồ sơ gia
							đình?
						</Text>
						<Text className="text-xs  text-center mt-2">
							Sau khi được {userFamily?.name} xác nhận bạn có thể
							xem hồ sơ sức khỏe của họ.
						</Text>
					</div>
					<div className="mt-10 flex gap-2 mx-5">
						<Button
							onClick={() => setScreen(1)}
							className=" text-base w-full text-white bg-[#DE3B40] font-bold text-center rounded-lg h-[48px]"
						>
							Từ chối
						</Button>
						<Button
							onClick={() => handleClickAccept()}
							className=" text-base w-full text-white bg-[#1479FF] font-bold text-center rounded-lg h-[48px]"
						>
							Xác nhận
						</Button>
					</div>
				</Box>
			)}
		</Box>
	)
}

export default InformationContainer
