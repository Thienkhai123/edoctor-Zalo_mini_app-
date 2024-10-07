import React, { useEffect, useState } from "react"
import { useParams } from "react-router"
import { Page } from "zmp-ui"
import Loading from "../../../share-components/Loading"
import { loginByNumber } from "../../../store/apis/home"
import { getMedicalRecord } from "../../../store/apis/riskDetail"
import { showError } from "../../../store/helper/utilitiesFunction"
import ResultRiskContainer from "./containers/resultRiskContainer"
import { getStorage } from "zmp-sdk/apis"

interface IMedicalRecord {
	createdAt: string
	medicalRecordId: number
	dangerousFactorDatas: DangerousFactorData[]
	isConfirm: boolean
	userConfirmName: any
	risk: number
	riskDisplay: string
	userConfirm: UserConfirm
}

interface DangerousFactorData {
	dangerous: number
	dangerousFactorName: string
	value: string
}

interface UserConfirm {
	function: any
	renewToken: any
	isCreate: boolean
	functionId: number
	avatar: any
	oldPassword: any
	rePassword: any
	setting: any
	fcmTokens: any
	guidId: any
	userId: number
	email: string
	password: string
	userGuid: string
	name: string
	phone: any
	isStaff: boolean
	avatarUrl: any
	fcmToken: any
	jobTitle: any
	firebaseUid: any
	gender: number
	resetPasswordGuid: string
	numberLoginFail: number
	lastLoginAt: any
	companyId: any
	departmentId: any
	birthday: any
	jobId: any
	characterId: any
	userSetting: any
	publishedPortfolio: any
	doctorType: number
	createdByUserId: any
	updatedByUserId: any
	updatedAt: string
	createdAt: string
	isActive: boolean
	isDeleted: boolean
}

const ResultRiskPage = () => {
	const { id, phone } = useParams()
	const [user, setUser] = useState<any>({})
	const [loading, setLoading] = useState<any>(true)
	const [medicalRecord, setMedicalRecord] = useState<IMedicalRecord>()

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
					const fetchMedicalRecord = await getMedicalRecord({
						medicalRecordId: id,
					})
					if (fetchMedicalRecord?.isSuccess) {
						setMedicalRecord(fetchMedicalRecord?.data)
					}
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
			<Page hideScrollbar={true} className="pb-12">
				{loading ? (
					<Loading />
				) : (
					<ResultRiskContainer
						phone={phone}
						userConfirm={medicalRecord?.userConfirm}
						datas={medicalRecord?.dangerousFactorDatas || []}
						risk={medicalRecord?.risk || 0}
					/>
				)}
			</Page>
		</>
	)
}

export default ResultRiskPage
