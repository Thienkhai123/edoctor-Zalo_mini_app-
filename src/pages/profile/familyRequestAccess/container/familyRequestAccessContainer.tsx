import React, { useEffect, useState } from "react"
import { useParams } from "react-router"
import { Box, Button, Text, useNavigate } from "zmp-ui"
import PersonFamilyProfile from "../components/personProfile"
import { IFamilyRequest } from "../../../../store/interface/IFamilyPatient"
import {
	showError,
	showSuccess,
} from "../../../../store/helper/utilitiesFunction"
import {
	acceptFamilyInvitation,
	rejectFamilyInvitation,
} from "../../../../store/apis/profile"

const FamilyRequestAccessContainer = ({
	listRequest = [],
	patientId,
}: {
	listRequest: IFamilyRequest[]
	patientId: number
}) => {
	const navigate = useNavigate()
	const { idFamily } = useParams()
	const [family, setFamily] = useState<any>()
	const handleUpdate = (id: number) => {
		// navigate(`/profile/famaly/update/${id}`)
	}

	const handleAccept = async () => {
		const res = await acceptFamilyInvitation({
			patientFamilyId: idFamily,
			patientId: patientId,
		})
		if (res?.isSuccess) {
			showSuccess("Đã chấp nhận lời mời!")
			// navigate(`/profile/famaly/${patientId}`)
			navigate(`/profile`)
		} else {
			showError(res?.errorMessage)
		}
	}

	const handleReject = async () => {
		const res = await rejectFamilyInvitation({
			patientFamilyId: idFamily,
			patientId: patientId,
		})
		if (res?.isSuccess) {
			showSuccess("Đã từ chối lời mời!")
			navigate("/profile/famaly/pendingAccess")
		} else {
			showError("Có lỗi xảy ra!")
		}
	}

	useEffect(() => {
		const findEl = listRequest?.find(
			(el) => el?.patientFamilyId === parseInt(idFamily || "")
		)
		setFamily({
			image: findEl?.fromPatient?.avatarUrl,
			name: findEl?.fromPatient?.name,
			dateOfBirth: findEl?.fromPatient?.dateOfBirth,
			gender: findEl?.fromPatient?.gender,
		})
	}, [])

	return (
		<Box className="">
			<div className="my-2 ">
				<Text className="text-sm font-bold text-center">
					HỒ SƠ CHỜ XÁC NHẬN
				</Text>
			</div>

			<div className="flex justify-center mt-4">
				{family && (
					<PersonFamilyProfile
						handleUpdate={handleUpdate}
						activeCacel={false}
						user={family}
					/>
				)}
			</div>
			<div className="mt-10 flex gap-2  mx-5">
				<Button
					onClick={() => handleReject()}
					className=" text-base w-full text-white bg-[#DE3B40] font-bold text-center rounded-lg h-[48px]"
				>
					Từ chối
				</Button>
				<Button
					onClick={() => handleAccept()}
					className=" text-base w-full text-white bg-[#1479FF] font-bold text-center rounded-lg h-[48px]"
				>
					Xác nhận
				</Button>
			</div>
		</Box>
	)
}

export default FamilyRequestAccessContainer
