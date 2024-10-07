import React, { FC } from "react"
import { IconProps } from "../type"

const ManIcon: FC<IconProps> = (props) => {
	const { stroke } = props
	return (
		<svg
			width="14px"
			height="14px"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			stroke="#000000"
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
					d="M10.25 21.5C14.5302 21.5 18 18.0302 18 13.75C18 9.46979 14.5302 6 10.25 6C5.96979 6 2.5 9.46979 2.5 13.75C2.5 18.0302 5.96979 21.5 10.25 21.5Z"
					stroke={stroke}
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>{" "}
				<path
					d="M21.5 2.5L16 8"
					stroke={stroke}
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>{" "}
				<path
					d="M15 2.5H21.5V9"
					stroke={stroke}
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>{" "}
			</g>
		</svg>
	)
}

export default ManIcon
