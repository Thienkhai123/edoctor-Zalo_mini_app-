import React from "react"
import NotificationDanger from "../../../homePage/components/notificationDanger"
import { Button, useNavigate } from "zmp-ui"
import { useParams } from "react-router-dom"
import { isEmpty } from "lodash"

interface DangerousFactorData {
	dangerous: number
	dangerousFactorName: string
	value: string
}

interface UserConfirm {
	function: any
	renewToken: any
	isCreate: boolean
	functionId: number
	avatar: any
	oldPassword: any
	rePassword: any
	setting: any
	fcmTokens: any
	guidId: any
	userId: number
	email: string
	password: string
	userGuid: string
	name: string
	phone: any
	isStaff: boolean
	avatarUrl: any
	fcmToken: any
	jobTitle: any
	firebaseUid: any
	gender: number
	resetPasswordGuid: string
	numberLoginFail: number
	lastLoginAt: any
	companyId: any
	departmentId: any
	birthday: any
	jobId: any
	characterId: any
	userSetting: any
	publishedPortfolio: any
	doctorType: number
	createdByUserId: any
	updatedByUserId: any
	updatedAt: string
	createdAt: string
	isActive: boolean
	isDeleted: boolean
}

const ResultRiskContainer = ({
	datas = [],
	risk,
	userConfirm,
}: {
	datas: DangerousFactorData[]
	risk: number
	userConfirm?: UserConfirm
}) => {
	const { type = "", id = "" } = useParams()

	const navigate = useNavigate()
	const handleAllImforHeadthy = (id: string) => {
		if (type === "riskDetail") {
			navigate(`/risk/dangerDetailRisk/${id}`)
		} else {
			navigate(`/homePage/detailHeadthy`)
		}
	}

	if (datas?.length === 0) {
		return (
			<p className="text-[#D22D3D] text-sm font-bold text-center pt-10">
				Không tìm thấy hồ sơ sức khỏe!
			</p>
		)
	}

	return (
		<div>
			<div className="pt-1 px-[10px]">
				<p className="text-center text-sm uppercase font-bold leading-[16px]">
					KẾT QUẢ PHÂN TẦNG YẾU TỐ NGUY CƠ
				</p>
				<div className="mt-10">
					{!isEmpty(userConfirm) ? (
						<p className="text-[#D22D3D] font-normal text-sm">
							Được xác nhận bởi bác sĩ:{" "}
							<span className="font-bold">
								{userConfirm?.name}
							</span>
						</p>
					) : (
						<p className="text-[#D22D3D] font-normal text-sm">
							Chưa được nhân viên y tế xác nhận
						</p>
					)}
				</div>
				<div className="mt-4 flex flex-col gap-1">
					{datas?.map((data, ind) => {
						return (
							<p
								key={ind}
								className="text-[#5E6379] text-sm font-normal"
							>
								{ind + 1}. {data.dangerousFactorName}:{" "}
								{!isEmpty(data?.value)
									? data?.value
									: "Không có"}
							</p>
						)
					})}
				</div>
				<div className="mt-5">
					<NotificationDanger rick={risk} />
				</div>
				<div className="flex justify-center mt-[25px] ">
					<Button
						onClick={() => handleAllImforHeadthy(id)}
						className=" text-sm w-[331px] text-white bg-[#1479FF] font-normal text-center rounded-lg"
					>
						Xem dữ liệu đã nhập
					</Button>
				</div>
			</div>
		</div>
	)
}

export default ResultRiskContainer
