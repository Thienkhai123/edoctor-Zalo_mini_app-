import React from "react"
import { Page } from "zmp-ui"
import SendRequestFamilyContainer from "./container/sendRequestFamilyContainer"

const SendRequestCreateFamily = () => {
	return (
		<>
			<Page hideScrollbar={true}>
				<SendRequestFamilyContainer />
			</Page>
		</>
	)
}

export default SendRequestCreateFamily
