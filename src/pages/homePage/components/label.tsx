import React from "react"
import { Box, Text } from "zmp-ui"

interface ILabelComponent {
	content: string
	labelStyle?: string
}

const LabelComponent = ({
	content = "",
	labelStyle = "w-6 h-1 ",
}: ILabelComponent) => {
	return (
		<Box className="flex gap-2 items-center w-fit">
			{/* <Box className={labelStyle} /> */}
			<Text size="small" className="text-nowrap w-full">
				{content}
			</Text>
		</Box>
	)
}

export default LabelComponent
