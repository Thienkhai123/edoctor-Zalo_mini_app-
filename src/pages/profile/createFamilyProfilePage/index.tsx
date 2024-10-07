import React from "react"
import { Page } from "zmp-ui"
import InformationContainer from "./containers/informationContainer"

const CreateFamilyProfilePage = () => {
	return (
		<>
			<Page hideScrollbar={true}>
				<InformationContainer />
			</Page>
		</>
	)
}

export default CreateFamilyProfilePage
