import React from "react"
import { Page } from "zmp-ui"
import CustomBottomNavigation from "../../share-components/CustomBottomNavigation"
import ProfileContainer from "./containers/profileContainer"

const ProfilePage = () => {
	return (
		<>
			<Page hideScrollbar={true} className="pb-[75px]">
				<ProfileContainer />
			</Page>
			<CustomBottomNavigation />
		</>
	)
}

export default ProfilePage
