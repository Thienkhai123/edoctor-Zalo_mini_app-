import API_ENDPOINT from "./apiEndpoint"
import { API_URL } from "./constants"

export const combineEndPoint = (endpoint: string): string => {
	let defaultEndpoint = ""
	const apiRoute = Object.entries(API_ENDPOINT).find(([_, endpoints]) =>
		Object.values<string>(endpoints).includes(endpoint)
	)
	if (apiRoute) {
		defaultEndpoint = API_ENDPOINT[apiRoute[0]]["__DEFAULT__"]
	}
	return defaultEndpoint + endpoint
}

export const createApiUrlEndpoint = (value: string): string => {
	const apiUrl = API_URL + combineEndPoint(value)
	return apiUrl
}

export const createApiUrlEndpointV2 = (value: string): string => {
	const apiUrl = API_URL + value
	return apiUrl
}
