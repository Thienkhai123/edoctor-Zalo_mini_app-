import React, { useEffect, useState } from "react"
import { Box, Button, Text, useNavigate } from "zmp-ui"
import PersonProfile from "../components/personProfile"
import { loginByNumber } from "../../../../store/apis/home"
import {
	showError,
	showSuccess,
} from "../../../../store/helper/utilitiesFunction"
import {
	deletePatientFamily,
	patientFamily,
} from "../../../../store/apis/profile"
import ArrowRightIcon from "../../../../share-components/icons/arrowRightIcon/arrowRightIcon"
import { IFamilyPatient } from "../../../../store/interface/IFamilyPatient"
import Loading from "../../../../share-components/Loading"
import { getStorage } from "zmp-sdk/apis"

const FamilyProfileContainer = () => {
	const navigate = useNavigate()
	const [family, setFamily] = useState<IFamilyPatient[]>([])
	const [loading, setLoading] = useState<any>(true)
	const [user, setUser] = useState<any>()

	const handleCreate = () => {
		navigate(`/profile/famaly/create`)
	}

	const handleUpdate = (phone: string) => {
		navigate(`/profile/famaly/information/${phone}`)
	}

	const handlePendingAccess = () => {
		navigate(`/profile/famaly/pendingAccess`)
	}

	const fetchUserData = async () => {
		setLoading(true)
		try {
			const { phoneNumber } = await getStorage({
				keys: ["phoneNumber"],
			})
			const response = await loginByNumber({ phone: phoneNumber })
			if (response.isSuccess) {
				const response_family = await patientFamily(response?.data?.id)
				const convert_families = response_family?.data?.filter(
					(fm: any) => fm?.id !== response?.data?.id
				)
				setUser(response?.data)
				setFamily(convert_families)
			} else {
				showError("Không tìm thấy hồ sơ sức khỏe!")
			}
		} catch (error) {
			throw error
		}
		setLoading(false)
	}

	const handleDeletePatientFamily = async (toPatientId: number) => {
		if (toPatientId !== null) {
			const res: any = await deletePatientFamily({
				fromPatientId: user?.id,
				toPatientId: toPatientId,
			})
			if (res?.isSuccess) {
				const response_family = await patientFamily(user?.id)
				const convert_families = response_family?.data?.filter(
					(fm: any) => fm?.id !== user?.id
				)
				setFamily(convert_families)
				showSuccess("Thay đổi hồ sơ gia đình thành công!")
			} else {
				showError("Vui lòng thử lại sau!")
			}
		}
	}

	useEffect(() => {
		fetchUserData()
	}, [])

	return loading ? (
		<Loading />
	) : (
		<Box className="mx-5 flex flex-col justify-between h-full">
			<div>
				<div className="my-2">
					<Text className="text-base  text-center">
						Hồ sơ gia đình
					</Text>
				</div>
				<div className="my-2">
					<div
						className="flex justify-between items-center h-[44px]"
						onClick={() => handlePendingAccess()}
					>
						<Text className="text-base text-[#0C7CFF] font-bold">
							Hồ sơ chờ xác nhận
						</Text>
						<ArrowRightIcon fill="#0C7CFF" />
					</div>
				</div>
				<div className="mt-3 ">
					{family?.length > 0 && (
						<div className="grid grid-cols-2 gap-3">
							{family?.reverse()?.map((fm, ind) => {
								const thisUserFm = {
									avatarUrl: fm?.avatarUrl,
									name: fm?.name,
									dateOfBirth: fm?.dateOfBirth,
									patientId:
										fm?.id !== user?.id ? fm?.id : null,
								}

								return (
									<div key={ind}>
										<PersonProfile
											handleUpdate={handleUpdate}
											activeCacel={
												thisUserFm?.patientId !== null
											}
											user={thisUserFm}
											patientFamilyId={fm?.id}
											phone={fm?.phone}
											handleDeletePatientFamily={
												handleDeletePatientFamily
											}
										/>
									</div>
								)
							})}
						</div>
					)}
					{family?.length === 0 && (
						<p className="text-sm">Chưa có dữ liệu</p>
					)}
				</div>
			</div>
			<div className="my-3 " onClick={() => handleCreate()}>
				<Button className=" text-base w-full text-white bg-[#1479FF] font-bold text-center rounded-lg">
					Thêm hồ sơ
				</Button>
			</div>
		</Box>
	)
}

export default FamilyProfileContainer
