import React, { useEffect, useState } from "react"
import { openChat } from "zmp-sdk"
import { BottomNavigation, useNavigate } from "zmp-ui"
import { OA_ID } from "../store/helper/constants"
import IconCustom from "./icons/IconsCustom"

const CustomBottomNavigation = () => {
	const [activeTab, setActiveTab] = useState("")
	const navigate = useNavigate()

	const openChatScreen = async () => {
		try {
			await openChat({
				type: "oa",
				id: OA_ID,
				message: "Tôi cần liên hệ với nhân viên y tế.",
			})
		} catch (error) {
			// xử lý khi gọi api thất bại
			throw error
		}
	}

	const navbarItemList = [
		{
			path: "/",
			name: "Trang chủ",
			icon: "home",
		},
		{
			path: "/risk",
			name: "Phân tầng nguy cơ",
			icon: "risk",
		},
		{
			path: "/profile",
			name: "Cá nhân",
			icon: "profile",
		},
	]

	const handleTabChange = (key: string) => {
		navigate(key)
	}

	useEffect(() => {
		setActiveTab(window.location.pathname)
	}, [window.location.pathname])

	return (
		<BottomNavigation
			fixed={true}
			activeKey={activeTab}
			onChange={handleTabChange}
			className="shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] bg-white flex items-center"
		>
			{navbarItemList.map((item: any) => (
				<BottomNavigation.Item
					key={item.path}
					label={item.name}
					icon={<IconCustom name={item.icon} />}
					activeIcon={<IconCustom name={item.icon} />}
					onClick={() => item.onClick}
					className="h-[75px] pt-[10px] "
				/>
			))}
			<BottomNavigation.Item
				key="/contact"
				label="Liên hệ bác sĩ"
				icon={<IconCustom name="contact" />}
				activeIcon={<IconCustom name="contact" />}
				onClick={() => openChatScreen()}
				className="h-[75px] pt-[10px]"
			/>
		</BottomNavigation>
	)
}

export default CustomBottomNavigation
