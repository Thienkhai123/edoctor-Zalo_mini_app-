import React, { useEffect, useState } from "react"
import { Box, Text } from "zmp-ui"
import { loginByNumber } from "../../../../store/apis/home"
import { showError } from "../../../../store/helper/utilitiesFunction"
import { getStorage } from "zmp-sdk/apis"
import Loading from "../../../../share-components/Loading"

const MyQRCodeContainer = () => {
	const [qrImage, setQrImage] = useState("")
	const [loading, setLoading] = useState<any>(true)

	useEffect(() => {
		const fetchUserData = async () => {
			setLoading(true)
			try {
				const { phoneNumber } = await getStorage({
					keys: ["phoneNumber"],
				})
				const response = await loginByNumber({ phone: phoneNumber })
				if (response.isSuccess) {
					setQrImage(response?.data?.qrUrl)
				} else {
					showError("Không tìm thấy hồ sơ sức khỏe!")
				}
			} catch (error) {
				throw error
			}
			setLoading(false)
		}
		fetchUserData()
	}, [])

	return (
		<>
			{loading ? (
				<Loading />
			) : (
				<Box className="mx-6">
					<div className="my-2 ">
						<Text className="text-base font-normal text-center">
							QR của tôi
						</Text>
					</div>
					<div className="flex justify-center mt-10">
						<img
							src={qrImage}
							className="object-cover w-[300px] h-[300px]"
						/>
					</div>
				</Box>
			)}
		</>
	)
}

export default MyQRCodeContainer
