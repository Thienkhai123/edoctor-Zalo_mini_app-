import React, { useEffect, useState } from "react"
import { Page } from "zmp-ui"
import DangerContainer from "./container/dangerContainer"
import { showError } from "../../../store/helper/utilitiesFunction"
import { loginByNumber } from "../../../store/apis/home"
import { useParams } from "react-router-dom"
import Loading from "../../../share-components/Loading"
import { getStorage } from "zmp-sdk/apis"

const DangerDetailPage = () => {
	const { id, phone } = useParams()
	const [user, setUser] = useState<any>({})
	const [loading, setLoading] = useState<any>(true)

	useEffect(() => {
		const fetchUserData = async () => {
			setLoading(true)
			try {
				const { phoneNumber } = await getStorage({
					keys: ["phoneNumber"],
				})
				const checkPhone = phone === "null" ? phoneNumber : phone
				const response = await loginByNumber({ phone: checkPhone })
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

export default DangerDetailPage
