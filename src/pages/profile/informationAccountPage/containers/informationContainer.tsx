import React, { useEffect, useState } from "react"
import { Box, useNavigate } from "zmp-ui"
import ImageAccount from "../components/imageAccount"
import FormInformation from "../components/formInformation"
import { chooseImage, getStorage, requestCameraPermission } from "zmp-sdk/apis"
import SheetUploadImage from "../../../../share-components/sheetUploadImage/SheetUploadImage"
import { loginByNumber } from "../../../../store/apis/home"
import {
	showError,
	showSuccess,
} from "../../../../store/helper/utilitiesFunction"
import { updateProfile } from "../../../../store/apis/profile"

const InformationContainer = () => {
	const navigate = useNavigate()
	const [user, setUser] = useState<any>({})
	const [loading, setLoading] = useState<any>(true)
	const [disibleButton, setDisibleButton] = useState(false)
	const [sheetVisible, setSheetVisible] = useState(false)
	const [date, setDate] = useState<any>({
		value: user?.dateOfBirth,
		pickedValue: {},
	})
	const [imageData, setImageData] = useState<any>({
		filePaths: [],
		tempFiles: {},
		objectURL: {},
		blob: {},
	})

	const handleChooseImage = async (sourceType = "album") => {
		try {
			const { userAllow, message } = await requestCameraPermission({})
			if (userAllow) {
				if (sourceType === "album") {
					const { filePaths, tempFiles } = await chooseImage({
						sourceType: ["album"],
						count: 1,
					})
					const [file] = filePaths
					const blob = await (await fetch(file)).blob()
					const objectURL = URL.createObjectURL(blob)

					setImageData({
						filePaths: filePaths,
						tempFiles: tempFiles,
						objectURL: objectURL,
						blob: blob,
					})
				}
				if (sourceType === "camera") {
					const { filePaths, tempFiles } = await chooseImage({
						sourceType: ["camera"],
						count: 1,
					})
					const [file] = filePaths
					const blob = await (await fetch(file)).blob()
					const objectURL = URL.createObjectURL(blob)

					setImageData({
						filePaths: filePaths,
						tempFiles: tempFiles,
						objectURL: objectURL,
						blob: blob,
					})
				}
				setSheetVisible(false)
			}
		} catch (error) {
			throw error
		}
	}

	const onChangeDate = (value: Date, pickedValue: [name: string]) => {
		setDate({ value: value, pickedValue: pickedValue })
	}

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

	const handleSubmit = async (data: any) => {
		setDisibleButton(true)
		const formData = new FormData()
		const fileImg = new File([imageData.blob], "userUpload.jpeg", {
			type: imageData.blob?.type,
		})
		formData.append("PatientId", user?.id)
		formData.append(
			"Name",
			data.fullName.length > 0 ? data.fullName : user?.name
		)
		formData.append(
			"DateOfBirth",
			date.pickedValue.year === undefined
				? user?.dateOfBirth
				: `${date.pickedValue.year}-${
						date.pickedValue.month > 9
							? date.pickedValue.month
							: `0${date.pickedValue.month}`
				  }-${
						date.pickedValue.date > 9
							? date.pickedValue.date
							: `0${date.pickedValue.date}`
				  }`
		)
		formData.append(
			"Gender",
			data.sex !== "undefined" ? parseInt(data.sex) : user?.gender
		)
		formData.append("Email", data.email !== null ? data.email : user?.email)
		formData.append(
			"Phone",
			data.phone.length > 0 ? data.phone : user?.phone
		)
		if (imageData.filePaths.length > 0) {
			formData.append("AvatarImage", fileImg)
		}
		const res: any = await updateProfile(formData)
		if (res?.isSuccess) {
			fetchUserData()
			showSuccess("Cập nhật thông tin thành công!")
		} else {
			showError("Vui lòng nhập đầy đủ thông tin!")
		}
		setDisibleButton(false)
	}

	useEffect(() => {
		fetchUserData()
	}, [])

	return (
		<>
			<Box>
				<ImageAccount
					takePicture={setSheetVisible}
					avatarUrl={user?.avatarUrl}
					avatarUrlUpload={imageData.objectURL}
				/>
				<div>
					<FormInformation
						handleUpdateInfor={handleSubmit}
						user={user}
						onChangeDate={onChangeDate}
						date={date}
						disibleButton={disibleButton}
					/>
				</div>
				<SheetUploadImage
					sheetVisible={sheetVisible}
					setSheetVisible={setSheetVisible}
					handleChooseImage={handleChooseImage}
				/>
			</Box>
		</>
	)
}

export default InformationContainer
