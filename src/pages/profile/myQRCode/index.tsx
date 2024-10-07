import React from "react"
import { Page } from "zmp-ui"
import MyQRCodeContainer from "./container/myQRCodeContainer"

const MyQRCode = () => {
	return (
		<>
			<Page hideScrollbar={true}>
				<MyQRCodeContainer />
			</Page>
		</>
	)
}

export default MyQRCode
