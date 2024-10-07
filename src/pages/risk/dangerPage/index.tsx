import React, { useEffect, useState } from "react"
import { Page } from "zmp-ui"
import DangerContainer from "./container/dangerContainer"
import { showError } from "../../../store/helper/utilitiesFunction"
import { loginByNumber } from "../../../store/apis/home"
import { getStorage } from "zmp-sdk/apis"
import Loading from "../../../share-components/Loading"

const DangerPage = () => {
	const [user, setUser] = useState<any>({})
	const [loading, setLoading] = useState<any>(true)

	useEffect(() => {
		const fetchUserData = async () => {
			setLoading(true)
			try {
				const { phoneNumber } = await getStorage({
					keys: ["phoneNumber"],
				})
				const response = await loginByNumber({ phone: phoneNumber })
				if (response.isSuccess) {
					setUser(response?.data)
				} else {
					showError("Không tìm thấy hồ sơ sức khỏe!")
				}
			} catch (error) {
				throw error
			}
			setLoading(false)
		}
		fetchUserData()
	}, [])
	return (
		<>
			<Page hideScrollbar={true}>
				{loading ? <Loading /> : <DangerContainer user={user} />}
			</Page>
		</>
	)
}

export default DangerPage
