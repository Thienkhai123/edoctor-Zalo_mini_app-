import React, { FC } from "react"
import { IconProps } from "../type"

const ArrowRightIcon: FC<IconProps> = (props) => {
	const { fill = "black" } = props
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
		>
			<path
				d="M13.172 12.0002L8.22198 7.05021L9.63598 5.63721L16 12.0002L9.63598 18.3642L8.22198 16.9492L13.172 12.0002Z"
				fill={fill}
			/>
		</svg>
	)
}

export default ArrowRightIcon
