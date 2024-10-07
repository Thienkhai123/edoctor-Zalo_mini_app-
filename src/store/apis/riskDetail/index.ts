import axios from "axios"
import API_ENDPOINT from "../../helper/apiEndpoint"
import { createApiUrlEndpoint } from "../../helper/apiFunction"

export const getMedicalRecord = async (payload: any) => {
	const { medicalRecordId } = payload
	const response = await axios.get(
		createApiUrlEndpoint(`${API_ENDPOINT.RISK_DETAIL}/${medicalRecordId }`)
	)
	const { data } = response
	return data
}