import React from "react"
import { Page } from "zmp-ui"
import NotificationListContainer from "./container/notificationListContainer"
import CustomBottomNavigation from "../../share-components/CustomBottomNavigation"

const NotificationPage = () => {
	return (
		<>
			<Page hideScrollbar={true} className="pb-[75px]">
				<NotificationListContainer />
				<CustomBottomNavigation />
			</Page>
		</>
	)
}

export default NotificationPage
