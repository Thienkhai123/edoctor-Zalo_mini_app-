import React, { Fragment } from "react"
import { useNavigate } from "zmp-ui"
import HazardIcon from "../../../../share-components/icons/hazardIcon"
import TreatIcon from "../../../../share-components/icons/treatIcon"

const HeadthyIndexFamilyContainer = (props: { user: any }) => {
	const { user } = props
	const navigate = useNavigate()

	const handleRiskStratification = (parentId: number) => {
		navigate(`/profile/tableDetail/${user?.phone}/${parentId}`)
	}

	const handleTreatmentRegimen = (parentId: number) => {
		navigate(`/profile/treatmentRegimen/${parentId}`)
	}

	return (
		<Fragment>
			<div className="mt-[140px] mx-[30px] px-2 flex justify-between">
				<div
					className="flex flex-col items-center"
					onClick={() => handleRiskStratification(user?.id)}
				>
					<HazardIcon />
					<p className="text-xs text-[#3875FC] leading-4 font-normal">
						Chỉ số sức khỏe
					</p>
				</div>
				<div
					className="flex flex-col items-center"
					onClick={() => handleTreatmentRegimen(user?.id)}
				>
					<TreatIcon />
					<p className="text-xs text-[#3875FC] leading-4 font-normal">
						Mục tiêu điều trị
					</p>
				</div>
			</div>
		</Fragment>
	)
}

export default HeadthyIndexFamilyContainer
