import React from "react"
import { Text } from "zmp-ui"
import { currentCustomDate } from "../../../../store/helper/utilitiesFunction"
import defaultAvatar from "../../../../images/defaultFamily.png"

const DetailProfile = (props: { user: any }) => {
	const { user } = props
	return (
		<div className="flex flex-col gap-3 justify-center items-center ">
			<img
				className="w-[139px] h-[139px] rounded-full border border-[#979797] object-cover"
				src={user?.avatarUrl ? user?.avatarUrl : defaultAvatar}
			/>
			<Text className="text-lg font-medium">{user?.name}</Text>
			<Text className="text-xs font-bold text-[#565D6D]">
				{user?.gender === 1 ? "Nam" : "Nữ"} -{" "}
				<span>{currentCustomDate(user?.dateOfBirth)}</span>
			</Text>
		</div>
	)
}

export default DetailProfile
