import React from "react"
import { Box, Text } from "zmp-ui"
import IconCustom from "../../../share-components/icons/IconsCustom"
import QRIcon from "../../../share-components/icons/QRICon"
import ResultNearIcon from "../../../share-components/icons/resultNearIcon"

const CategoryAccount = (props: {
	handleFamalyProfile: () => void
	handleClause: () => void
	handleDanger: () => void
	handleMyQrCode: () => void
	handlePrescriptionPage: () => void
	handleParaclinicalResultsPage: () => void
}) => {
	const {
		handleFamalyProfile,
		handleClause,
		handleDanger,
		handleMyQrCode,
		handlePrescriptionPage,
		handleParaclinicalResultsPage,
	} = props

	return (
		<Box className="">
			<div
				className="flex justify-between py-3"
				onClick={() => handleFamalyProfile()}
			>
				<div className="flex gap-4 items-center">
					<IconCustom name="familyIcon" />
					<Text className="text-base font-medium ">
						Hồ sơ gia đình
					</Text>
				</div>
				<div className="opacity-20">
					<IconCustom name="arrowRightIcon" />
				</div>
			</div>
			<div
				className="flex justify-between py-3"
				onClick={() => handleMyQrCode()}
			>
				<div className="flex gap-4 items-center">
					<QRIcon />
					<Text className="text-base font-medium ">
						QR code của tôi
					</Text>
				</div>
				<div className="opacity-20">
					<IconCustom name="arrowRightIcon" />
				</div>
			</div>
			<div
				className="flex justify-between py-3"
				onClick={() => handleClause()}
			>
				<div className="flex gap-4 items-center">
					<IconCustom name="clauseIcon" />
					<Text className="text-base font-medium ">
						Điều khoản sử dụng
					</Text>
				</div>
				<div className="opacity-20">
					<IconCustom name="arrowRightIcon" />
				</div>
			</div>
			<div
				className="flex justify-between py-3"
				onClick={() => handlePrescriptionPage()}
			>
				<div className="flex gap-4 items-center">
					<IconCustom name="dangerIcon" />
					<Text className="text-base font-medium ">Đơn thuốc</Text>
				</div>
				<div className="opacity-20">
					<IconCustom name="arrowRightIcon" />
				</div>
			</div>
			<div
				className="flex justify-between py-3"
				onClick={() => handleParaclinicalResultsPage()}
			>
				<div className="flex gap-4 items-center">
					<ResultNearIcon />
					<Text className="text-base font-medium ">
						Kết quả cận lâm sàng
					</Text>
				</div>
				<div className="opacity-20">
					<IconCustom name="arrowRightIcon" />
				</div>
			</div>
		</Box>
	)
}

export default CategoryAccount
