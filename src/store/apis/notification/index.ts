import axios from "axios"
import API_ENDPOINT from "../../helper/apiEndpoint"
import { createApiUrlEndpointV2 } from "../../helper/apiFunction"

export const getNotification = async (payload: any) => {
	try {
		const { patientId } = payload
		const response = await axios.get(
			createApiUrlEndpointV2(
				`${API_ENDPOINT.NOTIFICATION.GET_NOTIFICATION}/${patientId}?page=1&pageSize=500`
			)
		)
		const { data } = response
		return data
	} catch (error: any) {
		return error.response.data
	}
}
