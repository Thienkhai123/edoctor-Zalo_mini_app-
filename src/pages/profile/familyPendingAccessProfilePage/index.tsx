import React, { useEffect, useState } from "react"
import { Page } from "zmp-ui"
import { loginByNumber } from "../../../store/apis/home"
import { getFamilyInvitation } from "../../../store/apis/profile"
import { showError } from "../../../store/helper/utilitiesFunction"
import { IFamilyRequest } from "../../../store/interface/IFamilyPatient"
import FamilyPendingAccessList from "./containers/familyPendingAccessList"
import { getStorage } from "zmp-sdk/apis"
import Loading from "../../../share-components/Loading"

const FamilyPendingAccessProfilePage = () => {
	const [listRequest, setListRequest] = useState<IFamilyRequest[]>([])
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
					const response_family = await getFamilyInvitation(
						response?.data?.id
					)
					setListRequest(response_family?.data)
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
				{loading ? (
					<Loading />
				) : (
					<FamilyPendingAccessList listRequest={listRequest} />
				)}
			</Page>
		</>
	)
}

export default FamilyPendingAccessProfilePage
