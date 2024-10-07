import React from "react"
import { Page } from "zmp-ui"
import FamilyProfileContainer from "./containers/familyProfileContainer"

const FamalyProfilePage = () => {
	return (
		<>
			<Page hideScrollbar={true}>
				<FamilyProfileContainer />
			</Page>
		</>
	)
}

export default FamalyProfilePage
