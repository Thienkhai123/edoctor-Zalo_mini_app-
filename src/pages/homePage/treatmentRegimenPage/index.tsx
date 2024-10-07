import React, { useEffect, useState } from "react"
import InformationTreatmentRegimenContainer from "./container/informationTreatmentRegimen"
import { useNavigate } from "zmp-ui"
import { loginByNumber } from "../../../store/apis/home"
import { showError } from "../../../store/helper/utilitiesFunction"
import Loading from "../../../share-components/Loading"
import { getStorage } from "zmp-sdk/apis"

const TreatmentRegimenPage = () => {
	const navigate = useNavigate()
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
				navigate("/", { replace: true })
			}
			setLoading(false)
		}
		fetchUserData()
	}, [])

	return (
		<div>
			{loading ? (
				<Loading />
			) : (
				<InformationTreatmentRegimenContainer user={user} />
			)}
		</div>
	)
}

export default TreatmentRegimenPage
