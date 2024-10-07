import React, { useEffect, useState } from "react"
import { Page, useNavigate } from "zmp-ui"
import InformationFamilyContainer from "./containers/InformationFamilyContainer"
import HeadthyIndexFamilyContainer from "./containers/HeadthyIndexFamilyContainer"
import DetailRiskContainer from "./containers/detailRiskContainer"
import { showError } from "../../../store/helper/utilitiesFunction"
import { getLoginModel } from "../../../store/helper/authFunction"
import { loginByNumber } from "../../../store/apis/home"
import Loading from "../../../share-components/Loading"
import { useParams } from "react-router-dom"
import { getStorage } from "zmp-sdk/apis"

const InformationFamilyPage = () => {
	const { phone } = useParams()
	const [user, setUser] = useState<any>({})
	const [loading, setLoading] = useState<any>(true)

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

	useEffect(() => {
		fetchUserData()
	}, [])

	return (
		<>
			<Page hideScrollbar={true}>
				{loading ? (
					<Loading />
				) : (
					<>
						<InformationFamilyContainer user={user} />
						<HeadthyIndexFamilyContainer user={user} />
						<div className="mt-6 px-5">
							<DetailRiskContainer user={user} phone={phone} />
						</div>
					</>
				)}
			</Page>
		</>
	)
}

export default InformationFamilyPage
