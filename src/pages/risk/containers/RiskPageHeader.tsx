import React, { FC } from "react"
import InformationHeadthy from "../../homePage/components/informationHeadthy"
import IHomePageMyHeadthy from "../../../store/interface/IHomePageMyHeadthy"
import LogoIcon from "../../../share-components/icons/logo"
import { Button, useNavigate } from "zmp-ui"

const RiskPageHeader: FC<IHomePageMyHeadthy> = (props) => {
	const { user } = props
	const navigate = useNavigate()
	const handleAllImforHeadthy = () => {
		navigate(`/risk/dangerRisk`)
	}

	return (
		<div className="relative flex flex-col items-center">
			<div
				style={{
					background:
						"linear-gradient(180deg, #A1C4FF 32%, #5289FD 74.46%, #3875FC 118.16%)",
				}}
				className=" h-[200px] rounded-b-[50px] w-full"
			></div>
			<div className="absolute top-[47px] px-[28px] w-full">
				<div className="flex justify-between items-center w-full">
					<div>
						<LogoIcon />
					</div>
				</div>
				<div className="mt-[27px]">
					<InformationHeadthy user={user} />
				</div>
				<Button
					onClick={() => handleAllImforHeadthy()}
					className=" text-base w-full mt-[15px] text-white bg-[#1479FF] font-bold text-center rounded-lg"
				>
					Đánh giá phân tầng nguy cơ
				</Button>
			</div>
		</div>
	)
}

export default RiskPageHeader
