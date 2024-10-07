import React from "react"
import { Page } from "zmp-ui"
import ClauseContainer from "./container/clauseContainer"

const ClausePage = () => {
	return (
		<>
			<Page hideScrollbar={true}>
				<ClauseContainer />
			</Page>
		</>
	)
}

export default ClausePage
