import React, { useEffect, useState } from "react"
import { Page } from "zmp-ui"
import CustomBottomNavigation from "../../share-components/CustomBottomNavigation"
import HomePageMyHeadthyContainer from "./containers/HomePageMyHeadthyContainer"
import HomePageHeightWeighedContainer from "./containers/HomePageHeightWeighedContainer"
import HomePageChartContainer from "./containers/HomePageChartContainer"
import { getLoginModel } from "../../store/helper/authFunction"
import { showError } from "../../store/helper/utilitiesFunction"
import { loginByNumber } from "../../store/apis/home"
import Loading from "../../share-components/Loading"
import { createAccount } from "../../store/apis/profile"

const HomePage = () => {
	const [user, setUser] = useState<any>({})
	const [loading, setLoading] = useState<any>(true)

	const fetchUserData = async () => {
		setLoading(true)
		try {
			const user = await getLoginModel()
			const response = await loginByNumber(user)
			if (response.isSuccess) {
				setUser(response?.data)
			} else {
				const payload = {
					name:
						user?.userName === undefined || user?.userName === ""
							? "Chưa cập nhật"
							: user.userName,
					phone: user.phone,
				}
				const res = await createAccount(payload)
				if (res?.isSuccess) {
					const response = await loginByNumber(user)
					setUser(response?.data)
				} else {
					showError("Vui lòng cho phép truy cập thông tin!")
				}
			}
		} catch (error) {
			throw error
		}
		setLoading(false)
	}

	useEffect(() => {
		fetchUserData()
	}, [])

	return (
		<>
			<Page hideScrollbar={true} className="pb-[75px]">
				{loading ? (
					<Loading />
				) : (
					<div>
						<HomePageMyHeadthyContainer user={user} />
						<HomePageHeightWeighedContainer />
						<div className="px-1">
							<HomePageChartContainer
								user={user}
								fetchUserData={fetchUserData}
							/>
						</div>
					</div>
				)}
				<CustomBottomNavigation />
			</Page>
		</>
	)
}

export default HomePage
