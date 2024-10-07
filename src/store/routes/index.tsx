import contactPageConfig from "./contactPageConfig"
import homePageConfig from "./homePageConfig"
import notificationPageConfig from "./notificationPageConfig"
import profilePageConfig from "./profilePageConfig"
import riskPageConfig from "./riskPageConfig"

export const routes = [
	...homePageConfig,
	...riskPageConfig,
	...profilePageConfig,
	...contactPageConfig,
	...notificationPageConfig,
	// add more config here
	// ex: ...myPageConfig
]

export const settingNavigationRoutesConfig = [
	homePageConfig[0].path,
	riskPageConfig[0].path,
	profilePageConfig[0].path,
	contactPageConfig[0].path,
	notificationPageConfig[0].path,
]
