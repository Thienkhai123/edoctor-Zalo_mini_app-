import React, { useEffect, useState } from "react"
import { Box, ImageViewer, Page } from "zmp-ui"
import { loginByNumber } from "../../../store/apis/home"
import {
	currentCustomDate,
	currentTime,
	showError,
} from "../../../store/helper/utilitiesFunction"
import { getResourcesByType } from "../../../store/apis/profile"
import Loading from "../../../share-components/Loading"
import { getStorage } from "zmp-sdk/apis"

interface IPrescriptionRes {
	updatedByUser: any
	createdByUser: any
	medicalRecord: any
	patient: any
	uploadDate: string
	image: any
	resourceId: number
	resourceName: string
	resourceUrl: string
	resourceType: number
	medicalRecordId: number
	patientId: number
	createdByUserId: any
	updatedByUserId: any
	updatedAt: string
	createdAt: string
	isActive: boolean
	isDeleted: boolean
}

interface IPrescription {
	src: string
	alt: string
	createdAt: string
}

const ParaclinicalResultsPage = () => {
	const [visible, setVisible] = useState(false)
	const [activeIndex, setActiveIndex] = useState(0)
	const [listPrescription, setListPrescription] = useState<IPrescription[]>(
		[]
	)
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
					const tmpList: IPrescription[] = []
					const { data }: { data: IPrescriptionRes[] } =
						await getResourcesByType({
							patientId: response?.data?.id,
							type: 1,
						})
					data?.forEach((element) => {
						tmpList.push({
							src: element?.resourceUrl,
							alt: element?.resourceName || "",
							createdAt: element?.createdAt || "",
						})
					})
					setListPrescription(tmpList)
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
		<Page hideScrollbar={true}>
			{loading ? (
				<Loading />
			) : (
				<Box className="p-2">
					{listPrescription?.length === 0 && (
						<p className="text-black text-center">
							Chưa có dữ liệu.
						</p>
					)}
					{listPrescription?.length > 0 && (
						<>
							<p className="text-black text-center mb-2">
								Kết quả cận lâm sàng
							</p>
							<Box className=" bg-[#5296fd] flex gap-2 px-2 justify-center py-2 items-center">
								<p className="text-sm text-white break-words w-full">
									STT
								</p>
								<p className="text-sm text-white break-words w-full">
									Ngày tạo
								</p>
								<p className="text-sm text-white break-words w-full text-end">
									Chi tiết
								</p>
							</Box>

							{listPrescription?.map(
								(prescription: any, index) => {
									return (
										<>
											<Box className="flex gap-2 px-2 justify-center py-2 items-center border-b border-neutral-400">
												<p className="text-sm  break-words w-full">
													{index + 1}
												</p>
												<p className="text-sm  break-words w-full">
													{currentCustomDate(
														prescription?.createdAt
													)}{" "}
													{currentTime(
														prescription?.createdAt
													)}
												</p>
												<div className="w-full flex justify-end">
													<p
														className="text-sm  break-words w-fit text-end underline underline-offset-4 rounded-lg p-2 inset-1"
														onClick={() => {
															setActiveIndex(
																index
															)
															setVisible(true)
														}}
													>
														Xem
													</p>
												</div>
											</Box>
										</>
									)
								}
							)}
						</>
						// <div className="flex flex-col gap-4">
						// 	{listPrescription?.map((prescription, index) => {
						// 		return (
						// 			<div
						// 				key={index}
						// 				className="w-full"
						// 				onClick={() => {
						// 					setActiveIndex(index)
						// 					setVisible(true)
						// 				}}
						// 			>
						// 				<img
						// 					alt=""
						// 					src={prescription?.src}
						// 					className="w-full h-[200px]"
						// 					style={{
						// 						objectFit: "contain",
						// 					}}
						// 				/>
						// 			</div>
						// 		)
						// 	})}
						// </div>
					)}
					<ImageViewer
						images={listPrescription}
						onClose={() => setVisible(false)}
						activeIndex={activeIndex}
						visible={visible}
					/>
				</Box>
			)}
		</Page>
	)
}

export default ParaclinicalResultsPage
