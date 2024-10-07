import React from "react"
import DoctorNotiIcon from "../../../share-components/icons/doctorNotiIcon"
import NotificationItemIcon from "../../../share-components/icons/notificationItemIcon"
import {
	currentCustomDate,
	currentTime,
} from "../../../store/helper/utilitiesFunction"

const NotificationItem = ({
	content = "Cảnh báo sức khỏe ! Bạn đang tăng huyết áp độ 3. Vui lòng đến bệnh viện kiểm tra.",
	createdAt = "00:00 10/10/2022",
	type,
}) => {
	return (
		<div className="flex gap-5 items-center">
			<div className="flex items-end">
				{type === "doctor" ? (
					<DoctorNotiIcon />
				) : (
					<NotificationItemIcon />
				)}
				<div className="w-[5px] h-[5px] rounded-full bg-[#D22D3D]" />
			</div>
			<div>
				<p className="text-xs font-normal line-clamp-2 h-[32px]">
					{content}
				</p>
				<p className="mt-2 text-[8px] font-normal">
					{currentTime(createdAt)} {currentCustomDate(createdAt)}
				</p>
			</div>
		</div>
	)
}

export default NotificationItem
