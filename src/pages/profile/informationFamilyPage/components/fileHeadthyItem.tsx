import React from "react"
import { Text } from "zmp-ui"
import IFileHeadthy from "../../../../store/interface/IFileHeadthy"
import {
	currentCustomDate,
	currentTime,
} from "../../../../store/helper/utilitiesFunction"
import defaultDoctorImg from "../../../../images/defaultDoctor.png"
import defaultImg from "../../../../images/defaultDoctor.png"

const FileHeadthyItem = (props: {
	data: IFileHeadthy
	handleFileDetail: (id: number) => void
}) => {
	const { data, handleFileDetail } = props
	const {
		createdAt = "30/11/2022",
		addressWord = "BV ĐH Y dược",
		treatmentGuidelines = "cần nghiêm túc thực hiện chế độ luyện tập",
		reviewByDoctor = "TS.BS. Trần Đông Hồ",
		id = 1,
		diagnosis,
		risk,
		userConfirm,
		isConfirm,
		riskColor,
		riskDisplay,
		createdByUser,
		createdByUserId,
	} = data
	return (
		<div className="p-[10px] rounded-xl border border-neutral-300 shadow-[0px_4px_31px_0px_rgba(0, 0, 0, 0.10)]">
			<Text className="text-sm text-neutral-400 font-normal">
				Lần đánh giá: {currentCustomDate(createdAt)}{" "}
				{currentTime(createdAt)}
			</Text>
			<div className="flex gap-3 mt-3">
				<div>
					{isConfirm ? (
						<img
							className="min-w-[54px] h-[54px] shadow-sm object-cover rounded-[14px]"
							src={
								userConfirm?.avatarUrl
									? userConfirm?.avatarUrl
									: defaultDoctorImg
							}
							alt="avatar"
						/>
					) : (
						<img
							className="min-w-[54px] h-[54px] shadow-sm object-cover rounded-[14px]"
							src={defaultImg}
							alt="logo"
						/>
					)}
				</div>
				<div className="flex flex-col justify-between w-full">
					<div>
						<div className="flex items-center gap-3">
							<div
								style={{ backgroundColor: riskColor }}
								className="h-[10px] w-[10px] rounded-full"
							></div>
							<p className={`text-xs font-bold leading-[16px]`}>
								{riskDisplay}
							</p>
						</div>
						{isConfirm ? (
							<Text className="text-xs mt-3">
								Được xác nhận bởi bác sĩ: {userConfirm?.name}
							</Text>
						) : createdByUserId === null ? (
							<Text className="text-xs mt-3">Tự đánh giá</Text>
						) : (
							<Text className="text-xs mt-3">
								Đánh giá bởi nhân viên y tế:{" "}
								{createdByUser?.name}
							</Text>
						)}
					</div>
					<div
						className="w-full h-fit  rounded-[18px] bg-blue-500 py-1 px-5 mt-4"
						onClick={() => handleFileDetail(id)}
					>
						<Text className="text-sm text-white  text-center">
							Hiển thị chi tiết
						</Text>
					</div>
				</div>
			</div>
		</div>
	)
}

export default FileHeadthyItem
