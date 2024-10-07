import axios from "axios"
import ResultViewWithModel from "../../interface/common/ResultViewWithModel"
import {
	createApiUrlEndpoint,
	createApiUrlEndpointV2,
} from "../../helper/apiFunction"
import API_ENDPOINT from "../../helper/apiEndpoint"

type GetResourcePayloadT = {
	patientId: any
	type: any
}

export const patientFamily = async (payload: any) => {
	const response = await axios.get(
		createApiUrlEndpoint(
			`${API_ENDPOINT.PROFILE.GET_PATIENT_FAMILY}?patientId=${payload}`
		)
	)
	const { data } = response
	return data
}

export const getFamilyInvitation = async (payload: any) => {
	const response = await axios.get(
		createApiUrlEndpoint(
			`${API_ENDPOINT.PROFILE.GET_FAMILY_INVITATION}?patientId=${payload}`
		)
	)
	const { data } = response
	return data
}

export const acceptFamilyInvitation = async (payload: any) => {
	const { patientId, patientFamilyId } = payload || {}
	const response = await axios.post(
		createApiUrlEndpoint(
			`${API_ENDPOINT.PROFILE.ACCEPT_FAMILY_INVITATION}?patientId=${patientId}&patientFamilyId=${patientFamilyId}`
		)
	)
	const { data } = response
	return data
}

export const rejectFamilyInvitation = async (payload: any) => {
	const { patientId, patientFamilyId } = payload || {}
	const response = await axios.post(
		createApiUrlEndpoint(
			`${API_ENDPOINT.PROFILE.REJECT_FAMILY_INVITATION}?patientId=${patientId}&patientFamilyId=${patientFamilyId}`
		)
	)
	const { data } = response
	return data
}

export const sendFamilyInvitation = async (payload: any) => {
	try {
		const { fromPatientId, toPatientId } = payload || {}
		const response = await axios.post(
			createApiUrlEndpoint(
				`${API_ENDPOINT.PROFILE.SEND_FAMILY_INVITATION}?fromPatientId=${fromPatientId}&toPatientId=${toPatientId}`
			)
		)
		const { data } = response
		return data
	} catch (error: any) {
		return error?.response?.data
	}
}

export const createAccount = async (payload: any) => {
	try {
		const { name, phone } = payload
		const response = await axios.post(
			createApiUrlEndpointV2(
				`${API_ENDPOINT.PROFILE.CREATE_PATIENT_ZALO}?Name=${name}&Phone=${phone}`
			)
		)
		const { data } = response
		return data
	} catch (error) {
		return error
	}
}

export const updateProfile = async (payload: any) => {
	try {
		const response = await axios.post(
			createApiUrlEndpointV2(
				`${API_ENDPOINT.PROFILE.UPDATE_PATIENT_ZALO}`
			),
			payload,
			{
				headers: {
					"Content-Type": "multipart/form-data",
				},
			}
		)
		const { data } = response
		return data
	} catch (error) {
		return error
	}
}

export const getResourcesByType = async (payload: GetResourcePayloadT) => {
	try {
		const { patientId, type } = payload
		const response = await axios.get(
			createApiUrlEndpoint(
				`${API_ENDPOINT.PROFILE.GET_RESOURCE_BY_TYPE}?patientId=${patientId}&type=${type}`
			)
		)
		const { data } = response
		return data
	} catch (error) {
		return error
	}
}

export const getPatientById = async (payload: any) => {
	try {
		const { patientId } = payload
		const response = await axios.get(
			createApiUrlEndpoint(
				`${API_ENDPOINT.PROFILE.GET_PATIENT_BY_ID}/${patientId}`
			)
		)
		const { data } = response
		return data
	} catch (error: any) {
		return error?.response?.data
	}
}

export const deletePatientFamily = async (payload: any) => {
	try {
		const { fromPatientId, toPatientId } = payload
		const response = await axios.post(
			createApiUrlEndpoint(
				`${API_ENDPOINT.PROFILE.DELETE_PATIENT_FAMILY}?fromPatientId=${fromPatientId}&toPatientId=${toPatientId}`
			)
		)
		const { data } = response
		return data
	} catch (error: any) {
		return error?.response?.data
	}
}
