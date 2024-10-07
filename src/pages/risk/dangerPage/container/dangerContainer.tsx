import React, { FC, useEffect, useState } from "react"
import { Box, Button, Text, useNavigate } from "zmp-ui"
import DangerComponent from "../components/dangerComponent"
import DangerTypeFlexComponent from "../components/dangerTypeFlexComponent"
import { formDangerousCreate } from "../../../../store/apis/home"
import IHomePageMyHeadthy from "../../../../store/interface/IHomePageMyHeadthy"
import {
	currentAge,
	showError,
	showSuccess,
} from "../../../../store/helper/utilitiesFunction"
import { createClassifyDangerous } from "../../../../store/apis/risk"

const DangerContainer: FC<IHomePageMyHeadthy> = (props) => {
	const { user } = props
	const navigate = useNavigate()
	const [form, setForm] = useState<any | undefined>([])
	const [disibleButton, setDisibleButton] = useState(false)
	const [dataActive, setDataActive] = useState<any>([])

	const handleData = (
		formTemplateId: number,
		name: string,
		isChecked: boolean,
		type: number,
		value: any
	) => {
		if (dataActive?.length >= 1) {
			dataActive?.forEach((elm: any, ind: number) => {
				if (elm.name === name) {
					dataActive.splice(ind, 1)
					const objectValue = {
						formTemplateId: formTemplateId,
						name: name,
						isChecked: isChecked,
						type: type,
						value: value,
					}
					setDataActive([...dataActive, objectValue])
				} else {
					const objectValue = {
						formTemplateId: formTemplateId,
						name: name,
						isChecked: isChecked,
						type: type,
						value: value,
					}
					setDataActive([...dataActive, objectValue])
				}
			})
		} else {
			const objectValue = {
				formTemplateId: formTemplateId,
				name: name,
				isChecked: isChecked,
				type: type,
				value: value,
			}
			setDataActive([...dataActive, objectValue])
		}
	}

	const handleDoneForm = async () => {
		setDisibleButton(true)
		const formTemplateLength =
			form?.formTemplateGroups[0]?.formTemplates.length +
			form?.formTemplateGroups[1]?.formTemplates.length +
			form?.formTemplateGroups[2]?.formTemplates.length +
			form?.formTemplateGroups[3]?.formTemplates.length

		if (dataActive?.length === formTemplateLength) {
			const payload = {
				patientId: user?.id,
				formTemplates: dataActive,
			}
			const res: any = await createClassifyDangerous(payload)
			if (res?.isSuccess) {
				showSuccess("Thêm dữ liệu thành công!")
				navigate("/risk")
			} else {
				showError(res.errorMessage)
			}
		} else {
			showError("Vui lòng nhập đầy đủ thông tin!")
		}
		setDisibleButton(false)
	}

	useEffect(() => {
		const fetchUserData = async () => {
			const responseForm = await formDangerousCreate()
			setForm(responseForm?.data)
		}
		fetchUserData()
	}, [])

	return (
		<>
			<Box className="mx-2">
				<Text className="text-2xl font-bold my-3">
					Phân tầng yếu tố nguy cơ
				</Text>
				<Text className="text-base font-medium  ">
					1. Nhập chỉ số huyết áp*
				</Text>
				<div className="flex gap-2">
					{form?.formTemplateGroups?.length > 0 &&
						form?.formTemplateGroups[0]?.formTemplates?.map(
							(elm: any, ind: number) => {
								return (
									<>
										<input
											onChange={(e) =>
												handleData(
													elm?.formTemplateId,
													elm?.name,
													elm?.isChecked,
													elm?.type,
													e.target.value
												)
											}
											type="number"
											className="focus:outline-none border-b max-w-[150px] border-black text-base font-normal"
											placeholder={elm?.displayName}
										/>{" "}
										{ind === 0 && "/"}
									</>
								)
							}
						)}
				</div>
				<Text className="text-base font-medium mt-[14px] ">
					2. Các yếu tố nguy cơ*
				</Text>
				<div>
					<p className="text-base font-normal">
						{`+ ${user?.name}, ${currentAge(user?.dateOfBirth)} ${
							currentAge(user?.dateOfBirth) > 55
								? " > 55;"
								: " < 55;"
						} BMI: ${
							user?.bmiValue > 22.5
								? user?.bmiValue + " > 22.5"
								: user?.bmiValue + " < 22.5"
						}`}
					</p>
				</div>
				<div className="flex flex-col gap-3">
					{form?.formTemplateGroups?.length > 0 &&
						form?.formTemplateGroups[1]?.formTemplates?.map(
							(elm: any, ind: number) => {
								return (
									<>
										{elm?.type === 4 && (
											<div>
												+{" "}
												<input
													onChange={(e) =>
														handleData(
															elm?.formTemplateId,
															elm?.name,
															elm?.isChecked,
															elm?.type,
															e.target.value
														)
													}
													type="number"
													className="focus:outline-none border-b   border-black text-base font-normal"
													placeholder="Nhập chỉ số nhịp tim"
												/>
											</div>
										)}
										{elm?.type === 1 && (
											<DangerComponent
												ind={ind}
												name={elm?.name}
												formTemplateId={
													elm?.formTemplateId
												}
												isChecked={elm?.isChecked}
												type={elm?.type}
												handleData={handleData}
												dataActive={dataActive}
												title={elm?.displayName}
											/>
										)}
									</>
								)
							}
						)}
				</div>

				<Text className="text-base font-medium  ">
					3. Tổn thương cơ quan đích
				</Text>
				<div className="flex flex-col gap-3">
					{form?.formTemplateGroups?.length > 0 &&
						form?.formTemplateGroups[2]?.formTemplates?.map(
							(elm: any, ind: number) => {
								return (
									<>
										{elm?.type === 4 && (
											<div>
												+{" "}
												<input
													className="focus:outline-none border-b   border-black text-base font-normal"
													placeholder="Nhập chỉ số nhịp tim"
												/>
											</div>
										)}
										{elm?.type === 1 && (
											<DangerComponent
												ind={ind}
												name={elm?.name}
												formTemplateId={
													elm?.formTemplateId
												}
												isChecked={elm?.isChecked}
												type={elm?.type}
												handleData={handleData}
												dataActive={dataActive}
												title={elm?.displayName}
											/>
										)}
									</>
								)
							}
						)}
				</div>
				<Text className="text-base font-medium  ">
					4. Bệnh lý mạn tính kèm theo
				</Text>
				<div className="flex flex-col gap-3">
					{form?.formTemplateGroups?.length > 0 &&
						form?.formTemplateGroups[3]?.formTemplates?.map(
							(elm: any, ind: number) => {
								return (
									<>
										{elm?.type === 4 && (
											<div>
												+{" "}
												<input
													className="focus:outline-none border-b   border-black text-base font-normal"
													placeholder="Nhập chỉ số nhịp tim"
												/>
											</div>
										)}
										{elm?.type === 1 && (
											<DangerTypeFlexComponent
												ind={ind}
												name={elm?.name}
												formTemplateId={
													elm?.formTemplateId
												}
												isChecked={elm?.isChecked}
												type={elm?.type}
												handleData={handleData}
												dataActive={dataActive}
												title={elm?.displayName}
											/>
										)}
									</>
								)
							}
						)}
				</div>

				<Button
					disabled={disibleButton}
					onClick={() => handleDoneForm()}
					className=" text-base w-full mt-[14px]  text-white bg-[#1479FF] font-bold text-center rounded-lg"
				>
					Hoàn thành
				</Button>
				<Button
					onClick={() => navigate("/risk")}
					className=" text-base w-full mb-3  text-[#8C8F9F]  font-normal text-center rounded-lg bg-white"
				>
					Hủy
				</Button>
			</Box>
		</>
	)
}

export default DangerContainer
