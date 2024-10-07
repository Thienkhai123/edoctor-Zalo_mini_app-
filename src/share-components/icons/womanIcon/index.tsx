import React, { FC } from "react"
import { IconProps } from "../type"

const WomanIcon: FC<IconProps> = (props) => {
	const { stroke } = props
	return (
		<svg
			width="14px"
			height="14px"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
			<g
				id="SVGRepo_tracerCarrier"
				strokeLinecap="round"
				strokeLinejoin="round"
			></g>
			<g id="SVGRepo_iconCarrier">
				{" "}
				<path
					d="M12 16C15.866 16 19 12.866 19 9C19 5.13401 15.866 2 12 2C8.13401 2 5 5.13401 5 9C5 12.866 8.13401 16 12 16Z"
					stroke={stroke}
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>{" "}
				<path
					d="M12 16V22"
					stroke={stroke}
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>{" "}
				<path
					d="M15 19H9"
					stroke={stroke}
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>{" "}
			</g>
		</svg>
	)
}

export default WomanIcon
