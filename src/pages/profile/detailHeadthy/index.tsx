import React, { useEffect, useState } from "react"
import { Page, useNavigate } from "zmp-ui"
import TableHeadthy from "./components/tableHeadthy"
import {
	getBloodPressureResults,
	loginByNumber,
} from "../../../store/apis/home"
import { showError } from "../../../store/helper/utilitiesFunction"
import Loading from "../../../share-components/Loading"
import { useParams } from "react-router-dom"
import { getStorage } from "zmp-sdk/apis"

const DetailHeadthy = () => {
	const { phone, id } = useParams()
	const navigate = useNavigate()
	const [loading, setLoading] = useState<any>(true)
	const [bloodResults, setBloodResults] = useState<any>([])

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
					const responseDataTable = await getBloodPressureResults({
						patientId: response?.data?.id,
					})
					setBloodResults(responseDataTable?.data)
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
						{bloodResults === null || bloodResults?.length <= 0 ? (
							<p className="text-center text-sm font-normal mt-3">
								Chưa có thông tin
							</p>
						) : (
							<TableHeadthy
								bloodResults={bloodResults.reverse()}
							/>
						)}
					</>
				)}
			</Page>
		</>
	)
}

export default DetailHeadthy
