import React, { FC, Fragment, useEffect, useState } from "react"
import { useNavigate } from "zmp-ui"
import HazardIcon from "../../../share-components/icons/hazardIcon"
import TreatIcon from "../../../share-components/icons/treatIcon"

const HomePageHeightWeighedContainer = () => {
	const navigate = useNavigate()

	const handleRiskStratification = () => {
		navigate("/risk")
	}

	const handleTreatmentRegimen = () => {
		navigate("/homePage/treatmentRegimenPage")
	}

	return (
		<Fragment>
			<div className="mt-[80px] mx-[30px] px-2 flex justify-between">
				<div
					className="flex flex-col items-center"
					onClick={() => handleRiskStratification()}
				>
					<HazardIcon />
					<p className="text-xs text-[#0348DD] leading-4 font-normal">
						Phân tầng nguy cơ
					</p>
				</div>
				<div
					className="flex flex-col items-center"
					onClick={() => handleTreatmentRegimen()}
				>
					<TreatIcon />
					<p className="text-xs text-[#0348DD] leading-4 font-normal">
						Mục tiêu điều trị
					</p>
				</div>
			</div>
		</Fragment>
	)
}

export default HomePageHeightWeighedContainer
