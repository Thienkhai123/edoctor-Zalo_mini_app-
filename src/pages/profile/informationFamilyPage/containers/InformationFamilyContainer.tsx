import React from "react"
import { Box } from "zmp-ui"
import DetailProfile from "../components/detailProfile"

const InformationFamilyContainer = (props: { user: any }) => {
	const { user } = props
	return (
		<Box className="relative">
			<div
				style={{
					background:
						"linear-gradient(180deg, #80AEFD 32%, #5289FD 74.46%, #3875FC 118.16%)",
				}}
				className=" h-[130px]  w-full"
			></div>
			<div className="bg-white -mt-[20px] rounded-t-[15px] absolute w-full flex justify-center z-100">
				<div className=" -mt-[70px]">
					<DetailProfile user={user} />
				</div>
			</div>
		</Box>
	)
}

export default InformationFamilyContainer
