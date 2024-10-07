import React, { FC } from "react"
import { useNavigate } from "zmp-ui"
import IHomePageMyHeadthy from "../../../store/interface/IHomePageMyHeadthy"
import LogoIcon from "../../../share-components/icons/logo"
import CallIcon from "../../../share-components/icons/callIcon"
import NotificationIcon from "../../../share-components/icons/notificationIcon"
import InformationHeadthy from "../components/informationHeadthy"
import { openPhone } from "zmp-sdk/apis"

const HomePageMyHeadthyContainer: FC<IHomePageMyHeadthy> = (props) => {
	const { user } = props
	const navigate = useNavigate()

	const openCallScreen = async () => {
		try {
			await openPhone({
				phoneNumber: "+84523119136",
			})
		} catch (error) {
			// xử lý khi gọi api thất bại
			throw error
		}
	}

	return (
		<div className="relative flex flex-col items-center">
			<div
				style={{
					background:
						"linear-gradient(180deg, #A1C4FF 32%, #5289FD 74.46%, #3875FC 118.16%)",
				}}
				className=" h-[200px] rounded-b-[50px] w-full"
			></div>
			<div className="absolute top-[20px] px-[28px] w-full">
				<div className="flex justify-between items-center w-full">
					<div>
						<LogoIcon />
					</div>
					<div className="flex gap-2">
						<div onClick={() => openCallScreen()}>
							<CallIcon />
						</div>
						<div
							className="relative"
							onClick={() => navigate("/notification")}
						>
							<NotificationIcon />
							{user?.isHasNewNoti && (
								<div className="absolute top-0 right-0 p-1 h-[20px] w-[20px] rounded-full flex justify-center items-center text-xs text-white bg-red-600">
									{user?.newNotiCount}
								</div>
							)}
						</div>
					</div>
				</div>
				<div className="mt-[27px]">
					<InformationHeadthy user={user} />
				</div>
			</div>
		</div>
	)
}

export default HomePageMyHeadthyContainer
