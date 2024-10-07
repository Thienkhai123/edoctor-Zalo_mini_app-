import React from "react"
import { Box, Spinner, Text } from "zmp-ui"
import AppLogo from "./AppLogo"

const Loading = () => {
	return (
		<Box
			className="w-full h-[80vh]"
			flex
			flexDirection="column"
			justifyContent="center"
			alignItems="center"
		>
			<Spinner visible logo={<AppLogo />} />
			{/* <Box mt={6}>
				<Text.Title>Loading</Text.Title>
			</Box> */}
		</Box>
	)
}
export default Loading
