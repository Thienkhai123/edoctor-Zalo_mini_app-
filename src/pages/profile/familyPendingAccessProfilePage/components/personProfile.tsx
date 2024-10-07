import React from "react"
import { Text } from "zmp-ui"
import IconCustom from "../../../../share-components/icons/IconsCustom"
import { currentCustomDate } from "../../../../store/helper/utilitiesFunction"
import defaultBg from "../../../../images/defaultFamily.png"
import { isEmpty } from "lodash"

const PersonProfile = (props: {
	handleUpdate: (id: number) => void
	activeCacel: boolean
	user: { avatarUrl: string; name: string; dateOfBirth: string }
	patientFamilyId?: number
}) => {
	const { handleUpdate, activeCacel, user, patientFamilyId } = props
	return (
		<div
			className="relative max-w-[160px]"
			onClick={() => {
				if (patientFamilyId) {
					handleUpdate(patientFamilyId)
				}
			}}
		>
			<div className="rounded-[10px] overflow-hidden h-[160px] w-[160px] border-[1px] border-neutral-200">
				<img
					src={`${
						isEmpty(user?.avatarUrl) ? defaultBg : user?.avatarUrl
					}`}
					className="object-cover rounded-[10px]"
				/>
			</div>
			<div className="flex justify-center gap-1">
				<Text className="font-normal text-xs">
					{user.name ? user.name : "Chưa cập nhật"}
				</Text>
				<Text className="font-normal text-xs">-</Text>
				<Text className="font-normal text-xs">
					{currentCustomDate(user.dateOfBirth)}
				</Text>
			</div>
			{activeCacel && (
				<div className="absolute z-12 -right-[8px] -top-[10px] rounded-full p-1 flex justify-center items-center bg-blue-500 ">
					<IconCustom name="cancelIcon" />
				</div>
			)}
		</div>
	)
}

export default PersonProfile
