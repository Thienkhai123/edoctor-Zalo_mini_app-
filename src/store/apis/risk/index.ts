import axios from "axios"
import {
	createApiUrlEndpoint,
	createApiUrlEndpointV2,
} from "../../helper/apiFunction"
import API_ENDPOINT from "../../helper/apiEndpoint"

export const createClassifyDangerous = async (payload: any) => {
	try {
		const response = await axios.post(
			createApiUrlEndpointV2(
				`${API_ENDPOINT.RISK.CREATE_CLASSIFY_DANGEROUS}`
			),
			payload
		)
		return response.data
	} catch (error: any) {
		return error.response.data
	}
}

export const getClassifyDangerous = async (payload: any) => {
	try {
		const { patientId, medicalRecordId } = payload
		const response = await axios.get(
			createApiUrlEndpointV2(
				`${API_ENDPOINT.RISK.GET_CLASSIFY_DANGEROUS}/${medicalRecordId}`
			),
			payload
		)
		const { data } = response
		return data
	} catch (error) {
		return error
	}
}
