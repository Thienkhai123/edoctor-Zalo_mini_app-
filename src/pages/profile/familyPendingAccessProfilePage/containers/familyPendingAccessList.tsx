import React from "react"
import { Box, Text, useNavigate } from "zmp-ui"
import { IFamilyRequest } from "../../../../store/interface/IFamilyPatient"
import PersonProfile from "../components/personProfile"

const FamilyPendingAccessList = ({
	listRequest = [],
}: {
	listRequest: IFamilyRequest[]
}) => {
	const navigate = useNavigate()
	const handleRequestAccess = (id: number) => {
		navigate(`/profile/famaly/pendingAccess/${id}`)
	}

	return (
		<Box className="mx-5">
			<div className="my-2 ">
				<Text className="text-sm font-bold text-center">
					HỒ SƠ CHỜ XÁC NHẬN
				</Text>
			</div>
			<div className="mt-4 ">
				{listRequest?.length > 0 && (
					<div className="grid grid-cols-2 gap-3">
						{listRequest.map((fm, ind) => {
							const thisFm = {
								avatarUrl: fm?.fromPatient.avatarUrl,
								name: fm?.fromPatient?.name,
								dateOfBirth: fm?.fromPatient?.dateOfBirth,
							}
							return (
								<div key={ind}>
									<PersonProfile
										handleUpdate={handleRequestAccess}
										activeCacel={false}
										user={thisFm}
										patientFamilyId={
											fm?.patientFamilyId || 0
										}
									/>
								</div>
							)
						})}
					</div>
				)}
				{listRequest?.length === 0 && (
					<p className="text-sm">Bạn chưa có lời mời nào</p>
				)}
			</div>
		</Box>
	)
}

export default FamilyPendingAccessList
