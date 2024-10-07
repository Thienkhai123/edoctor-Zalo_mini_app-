import React from "react"
import { Text } from "zmp-ui"
import IconCustom from "../../../../share-components/icons/IconsCustom"
import { currentCustomDate } from "../../../../store/helper/utilitiesFunction"
import defaultAvatar from "../../../../images/defaultFamily.png"
import { isEmpty } from "lodash"

const PersonFamilyProfile = (props: {
	handleUpdate: (id: number) => void
	activeCacel: boolean
	user: { image: string; name: string; dateOfBirth: string; gender: number }
}) => {
	const { handleUpdate, activeCacel, user } = props
	return (
		<div className="relative" onClick={() => handleUpdate(1)}>
			<div className="rounded-[10px] overflow-hidden h-[160px] w-[160px] border-[1px] border-neutral-200">
				<img
					src={`${isEmpty(user.image) ? defaultAvatar : user.image}`}
					className="object-cover rounded-[10px]"
				/>
			</div>
			<div className="flex flex-col items-center">
				<Text className="font-normal text-xs">
					{user.name ? user.name : "Chưa cập nhật"}
				</Text>
				<Text className="font-normal text-xs">
					{user?.gender === 1 ? "Nam" : "Nữ"} -{" "}
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

export default PersonFamilyProfile
