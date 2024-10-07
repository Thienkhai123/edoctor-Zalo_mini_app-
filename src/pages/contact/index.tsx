import React from "react"
import { Page } from "zmp-ui"
import CustomBottomNavigation from "../../share-components/CustomBottomNavigation"
import ContactContainer from "./container/contactContainer"

const Contact = () => {
	return (
		<>
			<Page hideScrollbar={true} className="pb-12">
				<ContactContainer />
				<CustomBottomNavigation />
			</Page>
		</>
	)
}

export default Contact
