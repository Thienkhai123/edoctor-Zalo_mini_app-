import React, { FC } from "react"
import AvatarDefault from "../../../share-components/icons/avatarDefault"
import IHomePageMyHeadthy from "../../../store/interface/IHomePageMyHeadthy"
import { currentCustomDate } from "../../../store/helper/utilitiesFunction"
import { isEmpty } from "lodash"

const InformationHeadthy: FC<IHomePageMyHeadthy> = (props) => {
	const { user } = props

	return (
		<div>
			<div className="w-full rounded-[15px] bg-white min-h-[182px] shadow-md px-2 py-3">
				<div className="mt-[10px] flex">
					{!isEmpty(user?.avatarUrl) ? (
						<div className="mx-[25px] w-[60px] h-[60px]">
							<img
								src={user?.avatarUrl}
								className="w-[60px] h-[60px] object-cover rounded-lg"
							/>
						</div>
					) : (
						<div className="mx-[25px] w-[50px] h-[50px]">
							<AvatarDefault />
						</div>
					)}

					<div className="flex flex-col gap-1">
						<p className="text-lg font-bold text-[#565D6D] leading-[16px]">
							{user?.name}
						</p>
						<p className="text-xs font-bold text-[#565D6D] leading-[16px]">
							{user?.gender === 1 ? "Nam" : "Nữ"} -{" "}
							<span>{currentCustomDate(user?.dateOfBirth)}</span>
						</p>
						<div className="flex items-center gap-3">
							<div
								style={{ backgroundColor: user?.riskColor }}
								className="h-[10px] w-[10px] rounded-full"
							></div>
							<p className={`text-xs font-bold leading-[16px]`}>
								{user?.patientDangerousDisplay}
							</p>
						</div>
					</div>
				</div>
				<div className="bg-[#F4F7FD] flex justify-between items-center px-[25px] pt-[25px] pb-[15px] rounded-[20px] mt-[10px]">
					<div>
						<p className="text-[#565D6D] text-base leading-[16px] font-bold">
							Cân nặng
						</p>
						<p className="text-[#024CD4] text-base leading-[16px] font-bold mt-[10px]">
							{user?.weight > 0 ? user?.weight + "kg" : "--"}
						</p>
					</div>
					<div>
						<p className="text-[#565D6D] text-base leading-[16px] font-bold">
							Chiều cao
						</p>
						<p className="text-[#024CD4] text-base leading-[16px] font-bold mt-[10px]">
							{user?.height > 0 ? user?.height + "cm" : "--"}
						</p>
					</div>
					<div>
						<p className="text-[#565D6D] text-base leading-[16px] font-bold">
							BMI
						</p>
						<p className="text-[#024CD4] text-base leading-[16px] font-bold mt-[10px]">
							{user?.bmiValue > 0 ? user?.bmiValue : "--"}
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default InformationHeadthy
