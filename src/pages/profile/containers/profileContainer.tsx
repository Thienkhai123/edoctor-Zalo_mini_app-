import React, { useEffect, useState } from "react"
import { Box, Text, useNavigate } from "zmp-ui"
import InformationAccount from "../components/informationAccount"
import CategoryAccount from "../components/categoryAccount"
import { getLoginModel } from "../../../store/helper/authFunction"
import { loginByNumber } from "../../../store/apis/home"
import { showError } from "../../../store/helper/utilitiesFunction"
import Loading from "../../../share-components/Loading"
import { getStorage } from "zmp-sdk/apis"

const ProfileContainer = () => {
	const navigate = useNavigate()

	const handleInformationAccount = () => {
		navigate(`/profile/${1}`)
	}

	const handleFamalyProfile = () => {
		navigate(`/profile/famaly/${1}`)
	}

	const handleClause = () => {
		navigate(`/profile/clause`)
	}

	const handleDanger = () => {
		navigate(`/profile/danger`)
	}

	const handleMyQrCode = () => {
		navigate(`/profile/myQrcode`)
	}
	const [user, setUser] = useState<any>({})
	const [loading, setLoading] = useState<any>(true)

	useEffect(() => {
		const fetchUserData = async () => {
			setLoading(true)
			try {
				const { phoneNumber } = await getStorage({
					keys: ["phoneNumber"],
				})
				const response = await loginByNumber({ phone: phoneNumber })
				if (response.isSuccess) {
					setUser(response?.data)
				} else {
					showError("Không tìm thấy hồ sơ sức khỏe!")
				}
			} catch (error) {
				throw error
			}
			setLoading(false)
		}
		fetchUserData()
	}, [])

	const handlePrescriptionPage = () => {
		navigate(`/profile/prescription`)
	}

	const handleParaclinicalResultsPage = () => {
		navigate(`/profile/paraclinicalResults`)
	}

	return (
		<>
			{loading ? (
				<Loading />
			) : (
				<Box className="mx-2">
					<Box
						className="mx-1 my-4"
						onClick={() => handleInformationAccount()}
					>
						<InformationAccount
							name={user?.name}
							avatarUrl={user?.avatarUrl}
						/>
					</Box>
					<div className="mt-10 ounded-[10px]">
						<div>
							<CategoryAccount
								handleFamalyProfile={handleFamalyProfile}
								handleClause={handleClause}
								handleDanger={handleDanger}
								handleMyQrCode={handleMyQrCode}
								handlePrescriptionPage={handlePrescriptionPage}
								handleParaclinicalResultsPage={
									handleParaclinicalResultsPage
								}
							/>
						</div>
					</div>
				</Box>
			)}
		</>
	)
}

export default ProfileContainer
