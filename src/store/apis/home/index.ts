import axios from "axios"
import ResultViewWithModel from "../../interface/common/ResultViewWithModel"
import {
	createApiUrlEndpoint,
	createApiUrlEndpointV2,
} from "../../helper/apiFunction"
import API_ENDPOINT from "../../helper/apiEndpoint"

export const loginByNumber = async (payload: any) => {
	try {
		const { phone } = payload
		const response = await axios.get(
			createApiUrlEndpoint(
				`${API_ENDPOINT.HOME.GET_PATIENT_PHONE}/${phone}`
			)
		)
		const { data } = response
		return data
	} catch (error: any) {
		return error?.response?.data
	}
}

export const formDangerousCreate = async () => {
	try {
		const response = await axios.get(
			createApiUrlEndpointV2(
				`${API_ENDPOINT.HOME.GET_PATIENT_CLASSIFY_FORM}`
			)
		)
		const { data } = response
		return data
	} catch (error: any) {
		return error?.response?.data
	}
}

export const formCreate = async (payload: any) => {
	const { patientId, formType } = payload
	const response = await axios.get(
		createApiUrlEndpoint(
			`${API_ENDPOINT.HOME.GET_PATIENT_HEADTH_CARE_FORM}?healthcareType=${formType}`
		)
	)
	const { data } = response
	return data
}

export const getChartHeadthy = async (payload: any) => {
	try {
		const {
			patientId,
			formType,
			healthCareFilter,
			period,
			timeStart,
			timeEnd,
		} = payload
		let url = ""
		if (timeStart && timeEnd) {
			url = `${API_ENDPOINT.HOME.GET_HEADTHY_CARE_RECORD_BY_TYPE}?patientId=${patientId}&healthCareFilter=${healthCareFilter}&timeStart=${timeStart}&timeEnd=${timeEnd}&period=${period}`
		} else {
			url = `${API_ENDPOINT.HOME.GET_HEADTHY_CARE_RECORD_BY_TYPE}?patientId=${patientId}&healthCareFilter=${healthCareFilter}&period=${period}`
		}
		const response = await axios.get(createApiUrlEndpointV2(url))
		const { data } = response
		return data
	} catch (error: any) {
		return error?.response?.data
	}
}

export const createHeadthForm = async (payload: any) => {
	try {
		const response = await axios.post(
			createApiUrlEndpointV2(
				API_ENDPOINT.HOME.POST_PATIENT_CREATE_HEADTH_CARE
			),
			payload
		)
		return response
	} catch (error) {
		return error
	}
}

export const getBloodPressureResults = async (payload: any) => {
	try {
		const { patientId, medicalRecordId } = payload
		const response = await axios.get(
			createApiUrlEndpoint(
				`${API_ENDPOINT.HOME.GET_PATIENT_BLOOD_PRESSURE_RESULTS}?patientId=${patientId}`
			)
		)
		const { data } = response
		return data
	} catch (error) {
		return error
	}
}

export const getTreatmentTarget = async (payload: any) => {
	try {
		const { patientId } = payload
		const response = await axios.get(
			createApiUrlEndpointV2(
				`${API_ENDPOINT.HOME.GET_TREAMENT_TARGET}/${patientId}`
			)
		)
		const { data } = response
		return data
	} catch (error) {
		return error
	}
}

export const sendPatientNoti = async (payload: any) => {
	try {
		const response = await axios.post(
			createApiUrlEndpointV2(API_ENDPOINT.HOME.SEND_PATIENT_NOTI),
			payload
		)
		return response
	} catch (error) {
		return error
	}
}
