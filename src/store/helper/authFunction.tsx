import axios from "axios"
import {
	GetUserInfoReturns,
	getAccessToken,
	getPhoneNumber,
	getStorage,
	getUserInfo,
	removeStorage,
	setStorage,
} from "zmp-sdk"
import ILoginByZaloModel from "../interface/ILoginByZaloModel"
import API_ENDPOINT from "./apiEndpoint"
import {
	authorize,
	closeApp,
	getSetting,
	openPermissionSetting,
} from "zmp-sdk/apis"

type TokenData = {
	accessToken: string
	expireTime: string
}

export const isLoggedIn = async (): Promise<boolean> => {
	try {
		return (
			(await isTokenValid()) &&
			!!axios.defaults.headers.common.Authorization
		)
	} catch {
		return false
	}
}

export const isTokenValid = async (): Promise<boolean> => {
	try {
		const { accessToken, expireTime } = await getAuthTokenFromStorage()
		const currentTime = new Date()
		currentTime.setMinutes(currentTime.getMinutes() + 5)
		return (
			!!accessToken && !!expireTime && new Date(expireTime) > currentTime
		)
	} catch {
		return false
	}
}

export const getAuthTokenFromStorage = async (): Promise<TokenData> => {
	const { accessToken = "", expireTime = "" } = (await getStorage({
		keys: ["accessToken", "expireTime"],
	})) as TokenData
	return {
		accessToken,
		expireTime,
	}
}

export const setAuthTokenToStorage = (data: TokenData) => {
	setStorage({
		data: {
			accessToken: data.accessToken,
			expireTime: data.expireTime,
		},
	})
}

export const setAuthTokenToAxios = (accessToken: string) => {
	axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`
}

export const removeAuthToken = () => {
	removeStorage({
		keys: ["accessToken", "expireTime"],
	})
	delete axios.defaults.headers.common.Authorization
}

export const getLoginModel = async (): Promise<any> => {
	try {
		// await removeStorage({ keys: ["userInfo"] })
		const setting = await getSetting_Zalo()
		if (!setting["scope.userInfo"]) {
			const authData: any = await settingAuthorize()
			if (authData["scope.userInfo"]) {
				return getInformationModel()
			} else {
				await closeApp({})
			}
		} else {
			return getInformationModel()
		}
	} catch (error) {
		throw error
	}
}

export const getInformationModel = async () => {
	const { token = "" } = await getPhoneNumber()
	const accessToken = await getAccessToken()
	const userData = await getUserData()
	const response = await axios.get(API_ENDPOINT.GET_PHONE_NUMBER, {
		headers: {
			access_token: accessToken,
			code: token,
			secret_key: "2Y15MPh799HmEJ64QFBp",
		},
	})
	const user: ILoginByZaloModel = {
		zaloId: userData?.id,
		phone: 0 + response?.data?.data?.number.slice(2),
		accessToken: accessToken,
		userName: userData?.name,
		avatar: userData?.avatar,
		zaloOAId: userData?.idByOA || "",
	}
	await setStorage({
		data: {
			phoneNumber: 0 + response?.data?.data?.number.slice(2),
		},
	})
	return user
}

export const getUserData = async () => {
	let { userInfo } = (await getStorage({
		keys: ["userInfo"],
	})) as GetUserInfoReturns
	if (!userInfo?.id) {
		userInfo = (await getUserInfo()).userInfo
		await setStorage({
			data: {
				userInfo: userInfo,
			},
		})
	}
	return userInfo
}

const settingAuthorize = async () => {
	try {
		const authData = await authorize()
		return authData
	} catch (error) {
		return error
	}
}

const getSetting_Zalo = async () => {
	try {
		let authSetting = (await getSetting({})).authSetting
		return authSetting
	} catch (error) {
		throw error
	}
}

export const getOpenPermissionSetting = async () => {
	try {
		await openPermissionSetting({})
	} catch (error) {
		throw error
	}
}

export const getiOSVersion = () => {
	var userAgent = window.navigator.userAgent
	var iOS = /iP(hone|od|ad)/.test(userAgent)
	if (iOS) {
		var iOSVersion: any = userAgent.match(/OS (\d+)_(\d+)_?(\d+)?/)
		const iosFirst: any = parseInt(iOSVersion[1], 10)
		const iosSeccond: any = parseInt(iOSVersion[2], 10)
		const iosTh: any = parseInt(iOSVersion[3] || 0, 10)
		return { iosFirst, iosSeccond, iosTh }
	}
	return null
}

export const getAndroidVersion = () => {
	var userAgent = window.navigator.userAgent
	var android = userAgent.match(/Android\s([0-9\.]+)/)
	return android ? android[1] : null
}
