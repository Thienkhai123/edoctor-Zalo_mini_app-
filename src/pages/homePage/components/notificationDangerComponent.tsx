import React from "react"
import { Button } from "zmp-ui"
import { OA_ID } from "../../../store/helper/constants"
import { openChat } from "zmp-sdk/apis"

const NotificationDangerComponent = (props: {
	notificationDanger: any
	setDangerVisible: any
}) => {
	const { notificationDanger, setDangerVisible } = props
	const openChatScreen = async () => {
		try {
			await openChat({
				type: "oa",
				id: OA_ID,
				message: `Chỉ số sức khỏe của tôi có dấu hiệu bất thường: huyết áp ${notificationDanger?.sys}/${notificationDanger?.dia} (${notificationDanger?.bloodPressureDisplay}). Tôi cần liên hệ với nhân viên y tế.`,
			})
		} catch (error) {
			throw error
		}
	}

	return (
		<div>
			<p className="text-center font-bold text-sm">Thông báo</p>
			<div className="mt-[26px] flex flex-col gap-3">
				<p className="text-xs font-normal text-center">
					Chỉ số sức khỏe của bạn đang có dấu hiệu bất thường.{" "}
				</p>
				<p className="text-xs font-normal text-center text-[#DE3B40]">
					Huyết áp tâm thu: {notificationDanger?.sys}mmHg (
					{notificationDanger?.bloodPressureDisplay})
				</p>
				<p className="text-xs font-normal text-center ">
					Bạn có muốn liên hệ nhân viên y tế để xử lý ?
				</p>
			</div>
			<div className="mt-[60px]">
				<div className="my-4 flex gap-2  ">
					<Button
						onClick={() => setDangerVisible(false)}
						className=" text-base w-full text-white bg-[#DE3B40] font-bold text-center rounded-lg h-[48px]"
					>
						Đóng
					</Button>
					<Button
						onClick={() => openChatScreen()}
						className=" text-base w-full text-white bg-[#1479FF] font-bold text-center rounded-lg h-[48px]"
					>
						Liên hệ
					</Button>
				</div>
			</div>
		</div>
	)
}

export default NotificationDangerComponent
