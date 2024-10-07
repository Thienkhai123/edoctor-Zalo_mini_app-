import React, { FC, Fragment, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Box, Button, Icon, Modal, Sheet } from "zmp-ui"
import ChartComponent from "../components/chart"
import LabelComponent from "../components/label"
import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import {
	createHeadthForm,
	formCreate,
	getChartHeadthy,
	sendPatientNoti,
} from "../../../store/apis/home"
import {
	currentDateAndWeekdays,
	currentTime,
	showError,
	showSuccess,
} from "../../../store/helper/utilitiesFunction"
import FormChart from "../components/formChart"
import FormDateTimePicker from "../components/formDateTimePicker"
import GuideComponent from "../components/guideComponent"
import NotificationDangerComponent from "../components/notificationDangerComponent"
import ChooseFormAddData from "../components/chooseFormAddData"
import FormGlycemic from "../components/formGlycemic"
import TimeChart from "../components/timeChart"
import ChooseTimeChartModal from "../components/chooseTimeChartModal"
import { PickerColumnOption } from "zmp-ui/picker"
import NoteColorChart from "../components/noteColorChart"
import FormWeightHeight from "../components/formWeightHeight"
import { updateProfile } from "../../../store/apis/profile"
import { isEmpty } from "lodash"

const HomePageChartContainer = (props: {
	user: any
	fetchUserData: () => {}
}) => {
	const { user, fetchUserData } = props
	const navigate = useNavigate()
	const [sheetVisible, setSheetVisible] = useState(false)
	const [sheetFormDataVisible, setSheetFormDataVisible] = useState(false)
	const [sheetGlycemicVisible, setSheetGlycemicVisible] = useState(false)
	const [disibleButton, setDisibleButton] = useState(false)
	const [sheetWeightHeightBMIVisible, setSheetWeightHeightBMIVisible] =
		useState(false)
	const [dialogVisible, setDialogVisible] = useState(false)
	const [dangerVisible, setDangerVisible] = useState(false)
	const [chooseTimeVisible, setChooseTimeVisible] = useState(false)
	const [chooseGuidInd, setChooseGuidInd] = useState(0)
	const [formValue, setFormValue] = useState<any | undefined>([])
	const [data, setData] = useState<any | undefined>({})
	const [form, setForm] = useState<any | undefined>([])
	const [chooseDayChart, setChooseDayChart] = useState<any | undefined>(0)
	const [notificationDanger, setNotificationDanger] = useState<
		any | undefined
	>({})
	const [chooseDataChartDay, setChooseDataChart] = useState<any | undefined>(
		0
	)

	const [dateTime, setDateTime] = useState<any | undefined>({
		date: {},
		currentDate: new Date(),
		timeHour: new Date().getHours(),
		timeMinite: new Date().getMinutes(),
	})
	const [chooseTimeChart, setChooseTimeChart] = useState<any | undefined>({
		timeFist: {
			timeHour: 0,
			timeMinite: 0,
		},
		timeSeccond: {
			timeHour: 0,
			timeMinite: 0,
		},
	})

	const convertTimeFirst = {
		timeHour:
			chooseTimeChart.timeFist.timeHour > 9
				? chooseTimeChart.timeFist.timeHour
				: `0${chooseTimeChart.timeFist.timeHour}`,
		timeMinite:
			chooseTimeChart.timeFist.timeMinite > 9
				? chooseTimeChart.timeFist.timeMinite
				: `0${chooseTimeChart.timeFist.timeMinite}`,
	}

	const convertTimeSeccond = {
		timeHour:
			chooseTimeChart.timeSeccond.timeHour > 9
				? chooseTimeChart.timeSeccond.timeHour
				: `0${chooseTimeChart.timeSeccond.timeHour}`,
		timeMinite:
			chooseTimeChart.timeSeccond.timeMinite > 9
				? chooseTimeChart.timeSeccond.timeMinite
				: `0${chooseTimeChart.timeSeccond.timeMinite}`,
	}
	const checkTime =
		chooseTimeChart.timeFist.timeHour !== 0 ||
		chooseTimeChart.timeSeccond.timeHour !== 0 ||
		chooseTimeChart.timeFist.timeMinite !== 0 ||
		chooseTimeChart.timeSeccond.timeMinite !== 0

	const startTime = `2024-05-21T${convertTimeFirst.timeHour}:${convertTimeFirst.timeMinite}:06.651Z`
	const endTime = `2024-05-21T${convertTimeSeccond.timeHour}:${convertTimeSeccond.timeMinite}:06.651Z`

	const schema = yup.object({
		height: yup.string().required("Không được bỏ trống"),
		weight: yup.string().required("Không được bỏ trống"),
	})

	const {
		register,
		handleSubmit,
		reset,
		watch,
		formState: { errors, isValid },
	} = useForm({
		mode: "onChange",
		resolver: yupResolver(schema),
	})

	const handleOnChangeHeightWeight = async (data: any) => {
		setDisibleButton(true)
		const formData = new FormData()
		formData.append("PatientId", user?.id)
		formData.append("Height", data.height)
		formData.append("Weight", data.weight)
		const res: any = await updateProfile(formData)
		if (res?.isSuccess) {
			fetchUserData()
			setSheetWeightHeightBMIVisible(false)
			showSuccess("Thêm thông tin thành công!")
		} else {
			showError("Vui lòng nhập đầy đủ thông tin!")
		}
		setDisibleButton(false)
	}

	const handleCloseSheet = (typeSheet: number) => {
		if (typeSheet === 0) {
			setFormValue([])
			setSheetVisible(false)
		}
		if (typeSheet === 1) {
			setFormValue([])
			setSheetGlycemicVisible(false)
		}
		if (typeSheet === 3) {
			setFormValue([])
			setSheetWeightHeightBMIVisible(false)
		}
	}

	const handleChooseFormData = async (idForm = 1) => {
		if (idForm === 1) {
			const responseForm = await formCreate({
				formType: 0,
			})
			setForm(responseForm?.data)
			setSheetVisible(true)
		} else if (idForm === 2) {
			const responseForm = await formCreate({
				formType: 1,
			})
			setForm(responseForm?.data)
			setSheetGlycemicVisible(true)
		} else if (idForm === 3) {
			setSheetWeightHeightBMIVisible(true)
		}
	}

	const handleModalChooseTimeChart = () => {
		setChooseTimeChart({
			timeFist: {
				timeHour: 0,
				timeMinite: 0,
			},
			timeSeccond: {
				timeHour: 0,
				timeMinite: 0,
			},
		})
		setChooseTimeVisible(!chooseTimeVisible)
		fetchChartDataRecord(chooseDataChartDay, 0)
	}

	const onChange = (value: { [name: string]: PickerColumnOption }) => {
		setDateTime({
			...dateTime,
			timeHour: value["hour"].value,
			timeMinite: value["minute"].value,
		})
	}

	const onChangeTimeFist = (value: {
		[name: string]: PickerColumnOption
	}) => {
		setChooseTimeChart({
			...chooseTimeChart,
			timeFist: {
				timeHour: value["hour"].value,
				timeMinite: value["minute"].value,
			},
		})
	}

	const onChangeTimeSeccond = (value: {
		[name: string]: PickerColumnOption
	}) => {
		setChooseTimeChart({
			...chooseTimeChart,
			timeSeccond: {
				timeHour: value["hour"].value,
				timeMinite: value["minute"].value,
			},
		})
	}

	const onChangeDate = (value: Date, pickedValue: [name: string]) => {
		setDateTime({
			...dateTime,
			date: pickedValue,
			currentDate: value,
		})
	}

	const handleOnModalGuide = (ind: number) => {
		setChooseGuidInd(ind)
		setDialogVisible(true)
	}

	const fetchChartDataRecord = async (
		healthCareFilter: number,
		period: number,
		timeStart?: string,
		timeEnd?: string
	) => {
		const dataChartHP_TAMTHU: any = []
		const dataChartHP_TAMTRUONG: any = []
		const dataChartMACH: any = []
		const dataChartDH_TRUOCKHIAN: any = []
		const dataChartDH_SAUKHIAN: any = []

		const dataChartHP_TAMTHU_Time: any = []
		const dataChartHP_TAMTRUONG_Time: any = []
		const dataChartMACH_Time: any = []
		const dataChartDH_TRUOCKHIAN_Time: any = []
		const dataChartDH_SAUKHIAN_Time: any = []

		const responseForm = await getChartHeadthy({
			patientId: user?.id,
			healthCareFilter,
			period,
			timeStart: timeStart,
			timeEnd: timeEnd,
		})

		responseForm?.data?.forEach((element: any) => {
			element?.formTemplateRecords?.forEach((elm: any) => {
				if (elm?.name === "HA_TAMTHU") {
					dataChartHP_TAMTHU.push(elm?.value)
					dataChartHP_TAMTHU_Time.push({
						x: currentTime(element.createdAt, 1),
						y: elm?.value,
					})
				}
				if (elm?.name === "HA_TAMTRUONG") {
					dataChartHP_TAMTRUONG.push(elm?.value)
					dataChartHP_TAMTRUONG_Time.push({
						x: currentTime(element.createdAt, 1),
						y: elm?.value,
					})
				}
				if (elm?.name === "NHIP_TIM") {
					dataChartMACH.push(elm?.value)
					dataChartMACH_Time.push({
						x: currentTime(element.createdAt, 1),
						y: elm?.value,
					})
				}
				if (elm?.name === "DH_TRUOCAN" && !isEmpty(elm?.value)) {
					dataChartDH_TRUOCKHIAN.push(elm?.value)
					dataChartDH_TRUOCKHIAN_Time.push({
						x: currentTime(element.createdAt, 1),
						y: elm?.value,
					})
				}
				if (elm?.name === "DH_SAUAN" && !isEmpty(elm?.value)) {
					dataChartDH_SAUKHIAN.push(elm?.value)
					dataChartDH_SAUKHIAN_Time.push({
						x: currentTime(element.createdAt, 1),
						y: elm?.value,
					})
				}
			})
		})
		setData({
			bloodPressureFist: dataChartHP_TAMTHU_Time,
			bloodPressureSeccond: dataChartHP_TAMTRUONG_Time,
			barley: dataChartMACH_Time,
			bloodGlucoseFirst: dataChartDH_TRUOCKHIAN_Time,
			bloodGlucoseSecond: dataChartDH_SAUKHIAN_Time,
		})
		setChooseDayChart(period)
	}

	const handleAddHeath = async (healthCareType: number, formType: number) => {
		setDisibleButton(true)
		const currentDateTime = new Date()
		const combinedYear = `${
			dateTime.date.year === undefined
				? currentDateTime?.getFullYear()
				: dateTime.date.year
		}`
		const combinedMonth = `${
			dateTime.date.month === undefined
				? currentDateTime?.getMonth() + 1 > 9
					? currentDateTime?.getMonth() + 1
					: `0${currentDateTime?.getMonth() + 1}`
				: dateTime.date.month > 9
				? dateTime.date.month
				: `0${dateTime.date.month}`
		}`
		const combinedDate = `${
			dateTime.date.date === undefined
				? currentDateTime?.getDate() > 9
					? currentDateTime?.getDate()
					: `0${currentDateTime?.getDate()}`
				: dateTime.date.date > 9
				? dateTime.date.date
				: `0${dateTime.date.date}`
		}`
		const combinedDateTime = `${combinedYear}-${combinedMonth}-${combinedDate}T${
			dateTime.timeHour > 9 ? dateTime.timeHour : `0${dateTime.timeHour}`
		}:${
			dateTime.timeMinite > 9
				? dateTime.timeMinite
				: `0${dateTime.timeMinite}`
		}:06.651Z`

		const payload = {
			healthCareType: healthCareType,
			formId: form?.formId,
			medicalRecordId: user?.medicalRecord?.id,
			name: form?.name,
			patientId: user?.id,
			formTemplates: formValue,
			createdAt: combinedDateTime,
		}
		if (formType == 0) {
			if (form?.formTemplates.length === formValue.length) {
				const res: any = await createHeadthForm(payload)
				if (res.data?.isSuccess) {
					if (res?.data?.data?.isWarning) {
						const payloadNoti = {
							patientId: user?.id,
							bloodPressure: res.data.data?.sys,
							bloodpressureEnum: res.data.data?.bloodPressure,
						}
						await sendPatientNoti(payloadNoti)
						setNotificationDanger(res?.data?.data)
						setDangerVisible(true)
						showSuccess("Thêm dữ liệu thành công!")
						fetchChartDataRecord(chooseDataChartDay, chooseDayChart)
						handleCloseSheet(0)
					}
					if (!res?.data?.data?.isWarning) {
						setSheetVisible(false)
						setSheetGlycemicVisible(false)
						fetchChartDataRecord(chooseDataChartDay, chooseDayChart)
						showSuccess("Thêm dữ liệu thành công!")
						handleCloseSheet(0)
					}
				} else {
					showError("Vui lòng nhập đúng thông tin yêu cầu!")
				}
			} else {
				showError("Vui lòng nhập đầy đủ thông tin!")
			}
		} else {
			const res: any = await createHeadthForm(payload)
			if (res.data?.isSuccess) {
				setSheetVisible(false)
				setSheetGlycemicVisible(false)
				showSuccess("Thêm dữ liệu thành công!")
				fetchChartDataRecord(chooseDataChartDay, chooseDayChart)
				handleCloseSheet(1)
			} else {
				showError("Vui lòng nhập đúng thông tin yêu cầu!")
			}
		}
		setDateTime({
			date: {},
			currentDate: new Date(),
			timeHour: new Date().getHours(),
			timeMinite: new Date().getMinutes(),
		})
		setDisibleButton(false)
	}

	useEffect(() => {
		fetchChartDataRecord(0, 0)
	}, [user?.id])

	return (
		<Fragment>
			{/* <div className="mx-2 mt-4">
				<TabComponent
					fetchChartDataRecord={fetchChartDataRecord}
					chooseDataChartDay={chooseDataChartDay}
				/>
			</div> */}
			<p className="text-center mt-2 ">{currentDateAndWeekdays()}</p>
			<div className="my-2">
				{chooseDataChartDay === 0 && (
					<div className="flex  items-center justify-center w-full gap-3 ">
						<NoteColorChart />
						<NoteColorChart
							color="bg-[#CA0027]"
							text="Huyết áp tâm thu"
						/>
					</div>
				)}
				{chooseDataChartDay === 1 && (
					<div className="flex  items-center justify-center w-full gap-3 ">
						<NoteColorChart color="bg-[#F92F69]" text="Mạch" />
					</div>
				)}
				{chooseDataChartDay === 2 && (
					<div className="flex  items-center justify-center w-full gap-3 ">
						<NoteColorChart
							color="bg-[#5A08E7]"
							text="Đo trước ăn"
						/>
						<NoteColorChart color="bg-[#DA70D6]" text="Đo sau ăn" />
					</div>
				)}
			</div>
			{chooseDataChartDay === 0 && (
				<p className="text-[10px] text-neutral-500 pl-2">mmHg</p>
			)}
			{chooseDataChartDay === 1 && (
				<p className="text-[10px] text-neutral-500 pl-2">bpm</p>
			)}
			{chooseDataChartDay === 2 && (
				<p className="text-[10px] text-neutral-500 pl-2">mg/dl</p>
			)}
			<div className="mb-2 px-1">
				<ChartComponent
					bloodPressureFist={data.bloodPressureFist}
					bloodPressureSeccond={data.bloodPressureSeccond}
					barley={data.barley}
					bloodGlucoseFirst={data.bloodGlucoseFirst}
					bloodGlucoseSecond={data.bloodGlucoseSecond}
					chooseDataChartDay={chooseDataChartDay}
					dateTime={chooseTimeChart}
				/>
			</div>
			<div>
				<TimeChart
					handleModalChooseTimeChart={handleModalChooseTimeChart}
					dateTime={chooseTimeChart}
					setChooseTimeChart={setChooseTimeChart}
					fetchChartDataRecord={fetchChartDataRecord}
					chooseDataChartDay={chooseDataChartDay}
				/>
			</div>
			<Box className="grid grid-cols-3 gap-1 justify-between mt-4">
				<div
					className={`p-[5px] w-fit  ${
						chooseDataChartDay === 0 && "bg-[#D7E8FF] "
					}`}
					onClick={() => {
						setChooseDataChart(0)
						{
							checkTime
								? fetchChartDataRecord(
										0,
										chooseDayChart,
										startTime,
										endTime
								  )
								: fetchChartDataRecord(0, chooseDayChart)
						}
					}}
				>
					<LabelComponent content="Huyết áp" />
				</div>
				<div
					className={`p-[5px] w-fit  ${
						chooseDataChartDay === 1 && "bg-[#D7E8FF] "
					}`}
					onClick={() => {
						setChooseDataChart(1)
						{
							checkTime
								? fetchChartDataRecord(
										1,
										chooseDayChart,
										startTime,
										endTime
								  )
								: fetchChartDataRecord(1, chooseDayChart)
						}
					}}
				>
					<LabelComponent content="Mạch" labelStyle="w-6 h-1 " />
				</div>
				<div
					className={`p-[5px] w-fit  ${
						chooseDataChartDay === 2 && "bg-[#D7E8FF] "
					}`}
					onClick={() => {
						setChooseDataChart(2)
						{
							checkTime
								? fetchChartDataRecord(
										2,
										chooseDayChart,
										startTime,
										endTime
								  )
								: fetchChartDataRecord(2, chooseDayChart)
						}
					}}
				>
					<LabelComponent
						content="Đường huyết"
						labelStyle="w-6 h-1 "
					/>
				</div>
			</Box>

			<Box className=" flex justify-center mt-3">
				<Button
					className="text-xs text-[#005AD1] p-0 h-4 font-normal bg-transparent"
					onClick={() => navigate("/homePage/detailHeadthy")}
				>
					Xem tất cả dữ liệu <Icon icon="zi-arrow-right" size={10} />
				</Button>
			</Box>
			<Box className="my-3">
				<Button
					onClick={() => setSheetFormDataVisible(true)}
					className=" text-base w-full text-white bg-[#1479FF] font-bold text-center rounded-lg"
				>
					<Icon icon="zi-plus" size={13} /> Thêm dữ liệu
				</Button>
			</Box>
			{/* sheet choose form data */}
			<Sheet
				visible={sheetFormDataVisible}
				onClose={() => setSheetFormDataVisible(false)}
				autoHeight={true}
				// height={500}
				mask
				handler
				swipeToClose
				zIndex={1000}
			>
				<ChooseFormAddData
					handleChooseFormData={handleChooseFormData}
					setSheetFormDataVisible={setSheetFormDataVisible}
				/>
			</Sheet>
			{/* Sheet dymamic form */}
			<Sheet
				visible={sheetVisible}
				onClose={() => handleCloseSheet(0)}
				autoHeight={true}
				// height={500}
				mask
				handler
				swipeToClose
				zIndex={1000}
			>
				<div className="px-3  flex flex-col justify-between overflow-auto custom-scrollbar custom-scrollbar-horizontal">
					<p className="text-xl font-semibold text-center">
						Chỉ số tim mạch
					</p>
					<FormDateTimePicker
						onChange={onChange}
						onChangeDate={onChangeDate}
						dateTime={dateTime}
					/>
					{form?.formTemplates?.length > 0 &&
						form?.formTemplates?.map((elm: any, ind: number) => {
							const valueForm = formValue?.find(
								(e: any) => e.name === elm?.name
							)
							return (
								<div key={ind}>
									<FormChart
										idForm={ind}
										isChecked={elm?.isChecked}
										displayName={elm?.displayName}
										name={elm?.name}
										type={elm?.type}
										setFormValue={setFormValue}
										formValue={formValue}
										defaultValue={
											valueForm !== undefined
												? valueForm?.value
												: ""
										}
										formTemplateId={elm?.formTemplateId}
										handleOnModalGuide={handleOnModalGuide}
									/>
								</div>
							)
						})}
					{/* </div> */}
					<div className="my-4 flex gap-2 border-t ">
						<input
							value="Đóng"
							type="submit"
							onClick={() => handleCloseSheet(0)}
							className=" text-base w-full text-white bg-[#DE3B40] font-bold text-center rounded-lg h-[48px]"
						/>
						<input
							disabled={disibleButton}
							value="Lưu"
							type="submit"
							onClick={() => handleAddHeath(0, 0)}
							className=" text-base w-full text-white bg-[#1479FF] font-bold text-center rounded-lg h-[48px]"
						/>
					</div>
				</div>
			</Sheet>
			{/* Sheet glycemic index*/}
			<Sheet
				visible={sheetGlycemicVisible}
				onClose={() => handleCloseSheet(1)}
				autoHeight={true}
				// height={500}
				mask
				handler
				swipeToClose
				zIndex={1000}
			>
				<div className="px-3  flex flex-col justify-between overflow-auto custom-scrollbar custom-scrollbar-horizontal">
					<p className="text-xl font-semibold text-center">
						Chỉ số đường huyết
					</p>
					<FormDateTimePicker
						onChange={onChange}
						onChangeDate={onChangeDate}
						dateTime={dateTime}
					/>
					{form?.formTemplates?.length > 0 &&
						form?.formTemplates?.map((elm: any, ind: number) => {
							const valueForm = formValue?.find(
								(e: any) => e.name === elm?.name
							)
							return (
								<div key={ind}>
									<FormGlycemic
										idForm={ind}
										handleOnModalGuide={handleOnModalGuide}
										displayName={elm?.displayName}
										name={elm?.name}
										type={elm?.type}
										setFormValue={setFormValue}
										formValue={formValue}
										defaultValue={
											valueForm !== undefined
												? valueForm?.value
												: ""
										}
										formTemplateId={elm?.formTemplateId}
										isChecked={elm?.isChecked}
									/>
								</div>
							)
						})}

					{/* </div> */}
					<div className="my-4 flex gap-2 border-t ">
						<input
							value="Đóng"
							type="submit"
							onClick={() => handleCloseSheet(1)}
							className=" text-base w-full text-white bg-[#DE3B40] font-bold text-center rounded-lg h-[48px]"
						/>
						<input
							disabled={disibleButton}
							value="Lưu"
							type="submit"
							onClick={() => handleAddHeath(1, 1)}
							className=" text-base w-full text-white bg-[#1479FF] font-bold text-center rounded-lg h-[48px]"
						/>
					</div>
				</div>
			</Sheet>
			{/* Sheet Weight height BMI */}
			<Sheet
				visible={sheetWeightHeightBMIVisible}
				onClose={() => handleCloseSheet(3)}
				autoHeight={true}
				// height={500}
				mask
				handler
				swipeToClose
				zIndex={1000}
			>
				<form onSubmit={handleSubmit(handleOnChangeHeightWeight)}>
					<div className="px-3  flex flex-col justify-between overflow-auto custom-scrollbar custom-scrollbar-horizontal">
						<p className="text-xl font-semibold text-center">
							Chiều cao, cân nặng
						</p>
						<FormWeightHeight register={register} errors={errors} />
						{/* </div> */}
						<div className="my-4 flex gap-2 border-t ">
							<button
								type="submit"
								onClick={() => handleCloseSheet(3)}
								className=" text-base w-full text-white bg-[#DE3B40] font-bold text-center rounded-lg h-[48px]"
							>
								Đóng
							</button>
							<input
								disabled={disibleButton}
								value="Lưu"
								type="submit"
								className=" text-base w-full text-white bg-[#1479FF] font-bold text-center rounded-lg h-[48px]"
							/>
						</div>
					</div>
				</form>
			</Sheet>
			{/* Modal Guide*/}
			<Modal
				visible={dialogVisible}
				onClose={() => {
					setDialogVisible(false)
				}}
			>
				<GuideComponent
					description={
						form?.formTemplates?.length > 0 &&
						form?.formTemplates[chooseGuidInd]?.description
					}
					setDialogVisible={setDialogVisible}
				/>
			</Modal>
			{/* Modal notification danger */}
			<Modal
				visible={dangerVisible}
				onClose={() => {
					setDangerVisible(false)
					window.location.reload()
				}}
				width={330}
			>
				<NotificationDangerComponent
					setDangerVisible={setDangerVisible}
					notificationDanger={notificationDanger}
				/>
			</Modal>

			{/* Modal choose time */}
			<Modal
				visible={chooseTimeVisible}
				onClose={() => {
					setChooseTimeVisible(false)
				}}
				width={330}
			>
				<ChooseTimeChartModal
					handleModalChooseTimeChart={handleModalChooseTimeChart}
					onChange={onChange}
					onChangeTimeFist={onChangeTimeFist}
					onChangeTimeSeccond={onChangeTimeSeccond}
					onChangeDate={onChangeDate}
					dateTime={chooseTimeChart}
					setChooseTimeVisible={setChooseTimeVisible}
					fetchChartDataRecord={fetchChartDataRecord}
					chooseDayChart={chooseDayChart}
					chooseDataChartDay={chooseDataChartDay}
				/>
			</Modal>
		</Fragment>
	)
}

export default HomePageChartContainer
