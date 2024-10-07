import React from "react"
import { Page } from "zmp-ui"
import DangerContainer from "./container/dangerContainer"

const DangerPage = () => {
	return (
		<>
			<Page hideScrollbar={true}>
				<DangerContainer />
			</Page>
		</>
	)
}

export default DangerPage
