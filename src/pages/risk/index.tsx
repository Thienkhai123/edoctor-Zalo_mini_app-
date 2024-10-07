import React, { useEffect, useState } from "react"
import { Page } from "zmp-ui"
import Loading from "../../share-components/Loading"
import CustomBottomNavigation from "../../share-components/CustomBottomNavigation"
import RiskPageHeader from "./containers/RiskPageHeader"
import { loginByNumber } from "../../store/apis/home"
import { showError } from "../../store/helper/utilitiesFunction"
import RiskPageHistoryContainer from "./containers/RiskPageHistoryContainer"
import { getStorage } from "zmp-sdk/apis"

const RiskPage = () => {
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
			<Page hideScrollbar={true} className="pb-[75px]">
				{loading ? (
					<Loading />
				) : (
					<div>
						<RiskPageHeader user={user} />
						<RiskPageHistoryContainer user={user} />
					</div>
				)}
				<CustomBottomNavigation />
			</Page>
		</>
	)
}

export default RiskPage
