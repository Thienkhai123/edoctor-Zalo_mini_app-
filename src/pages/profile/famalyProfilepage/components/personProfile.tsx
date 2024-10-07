import React from "react"
import { Text } from "zmp-ui"
import IconCustom from "../../../../share-components/icons/IconsCustom"
import { calculateAge } from "../../../../store/helper/utilitiesFunction"
import defaultBg from "../../../../images/defaultFamily.png"

const PersonProfile = (props: {
	handleUpdate: (phone: string) => void
	activeCacel: boolean
	user: {
		avatarUrl: string
		name: string
		dateOfBirth: string
		patientId: any
	}
	patientFamilyId?: number
	phone: string
	handleDeletePatientFamily: (toPatientId: number) => void
}) => {
	const {
		handleUpdate,
		handleDeletePatientFamily,
		activeCacel,
		user,
		patientFamilyId,
		phone,
	} = props

	return (
		<div className="relative max-w-[160px]">
			<div
				onClick={() => {
					if (patientFamilyId) {
						handleUpdate(phone)
					}
				}}
				className="rounded-[10px] overflow-hidden h-[160px] w-[160px] border-[1px] border-neutral-200"
			>
				<img
					src={`${user?.avatarUrl ? user?.avatarUrl : defaultBg}`}
					className="object-cover rounded-[10px]"
				/>
			</div>
			<div className="flex justify-center gap-1">
				<Text className="font-normal text-xs">
					{user.name ? user.name : "Chưa cập nhật"}
				</Text>
				<Text className="font-normal text-xs">-</Text>
				<Text className="font-normal text-xs">
					{calculateAge(user.dateOfBirth)}
				</Text>
			</div>
			{activeCacel && (
				<div
					onClick={() => handleDeletePatientFamily(user?.patientId)}
					className="absolute z-12 -right-[8px] -top-[10px] rounded-full p-1 flex justify-center items-center bg-blue-500 "
				>
					<IconCustom name="cancelIcon" />
				</div>
			)}
		</div>
	)
}

export default PersonProfile
