import React, { useEffect, useRef, useState } from "react"
import { useNavigate } from "zmp-ui"
import NotificationItem from "../components/notificationItem"
import { loginByNumber } from "../../../store/apis/home"
import { showError } from "../../../store/helper/utilitiesFunction"
import { getNotification } from "../../../store/apis/notification"
import Loading from "../../../share-components/Loading"
import { getStorage } from "zmp-sdk/apis"

const NotificationListContainer = () => {
	const navigate = useNavigate()
	const [noti, setNoti] = useState<any>([])
	const [loading, setLoading] = useState<any>(true)
	const scrollableRef = useRef(null)

	useEffect(() => {
		const fetchUserData = async () => {
			setLoading(true)
			try {
				const { phoneNumber } = await getStorage({
					keys: ["phoneNumber"],
				})
				const response = await loginByNumber({ phone: phoneNumber })
				if (response.isSuccess) {
					const responseNoti = await getNotification({
						patientId: response?.data?.id,
					})
					setNoti(responseNoti?.data)
				} else {
					showError("Không tìm thấy hồ sơ sức khỏe!")
				}
			} catch (error) {
				navigate("/", { replace: true })
			}
			setLoading(false)
		}
		fetchUserData()
	}, [])

	return (
		<>
			<div
				className="px-[10px] py-2"
				id="scrollable-content"
				ref={scrollableRef}
			>
				<p className="text-base font-normal mb-5 text-center">
					Thông báo
				</p>
				{loading ? (
					<Loading />
				) : (
					<>
						{noti?.length > 0 ? (
							<div className="flex flex-col gap-5">
								{noti?.map((elm: any, ind: number) => {
									return (
										<div key={ind}>
											<NotificationItem {...elm} />
										</div>
									)
								})}
							</div>
						) : (
							<p className="text-center text-sm font-normal mt-3">
								Hiện tại chưa có thông báo!
							</p>
						)}
					</>
				)}
			</div>
		</>
	)
}

export default NotificationListContainer
