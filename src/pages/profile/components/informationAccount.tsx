import React from "react"
import { Box, Text } from "zmp-ui"
import IconCustom from "../../../share-components/icons/IconsCustom"
import { isEmpty } from "lodash"

const InformationAccount = (props: { name: any; avatarUrl: string }) => {
	const { name, avatarUrl } = props
	return (
		<Box className="gap-2 items-center flex">
			<div className="relative">
				{isEmpty(avatarUrl) ? (
					<IconCustom name="defaultAvatar" />
				) : (
					<img
						src={avatarUrl}
						className="object-cover h-[60px] w-[60px] rounded-full"
					/>
				)}
				<div className="absolute -right-[2px] -bottom-[5px]">
					<IconCustom name="settingIcon" />
				</div>
			</div>
			<Box>
				<Text className="text-2xl font-bold">{name}</Text>
				<Text className="text-xs mt-1">Thông tin tài khoản</Text>
			</Box>
		</Box>
	)
}

export default InformationAccount
