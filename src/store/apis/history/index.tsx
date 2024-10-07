import axios from "axios"
import { createApiUrlEndpoint } from "../../helper/apiFunction"
import API_ENDPOINT from "../../helper/apiEndpoint"

export const getMedicalRecordHistory = async (payload: any) => {
	try {
		const { patientId } = payload
		const response = await axios.get(
			createApiUrlEndpoint(
				`${API_ENDPOINT.HISTORY.GET_MEDICAL_RECORD_HISTORY}?patientId=${patientId}&page=1&pageSize=1000`
			)
		)
		const { data } = response
		return data
	} catch (error) {
		return error
	}
}

export const getDetailMedicalRecordHeadthyIndex = async (payload: any) => {
	try {
		const { patientId, medicalRecordId } = payload
		const response = await axios.get(
			createApiUrlEndpoint(
				`${API_ENDPOINT.HOME.GET_PATIENT_BLOOD_PRESSURE_RESULTS}?patientId=${patientId}&medicalRecordId=${medicalRecordId}`
			)
		)
		const { data } = response
		return data
	} catch (error) {
		return error
	}
}
