import React, { useEffect, useState } from "react"
import { Page } from "zmp-ui"
import FamilyRequestAccessContainer from "./container/familyRequestAccessContainer"
import { loginByNumber } from "../../../store/apis/home"
import { showError } from "../../../store/helper/utilitiesFunction"
import { IFamilyRequest } from "../../../store/interface/IFamilyPatient"
import { getFamilyInvitation } from "../../../store/apis/profile"
import Loading from "../../../share-components/Loading"
import { getStorage } from "zmp-sdk/apis"

const FamilyRequestAccess = () => {
	const [patientId, setPatientId] = useState(0)
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
					setPatientId(response?.data?.id)
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
					<>
						{listRequest?.length > 0 ? (
							<FamilyRequestAccessContainer
								listRequest={listRequest}
								patientId={patientId}
							/>
						) : (
							<p className="text-xs font-normal text-center mt-5">
								Không có thông tin!
							</p>
						)}
					</>
				)}
			</Page>
		</>
	)
}

export default FamilyRequestAccess
