import React from "react"
import { DatePicker, Text } from "zmp-ui"
import IconCustom from "../../../../share-components/icons/IconsCustom"
import { Controller, useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import FlagIcon from "../../../../share-components/icons/flagIcon"
import { isEmpty } from "lodash"

const FormInformation = (props: {
	handleUpdateInfor: (data: any) => void
	onChangeDate: (value: Date, pickedValue: [name: string]) => void
	user: any
	date: any
	disibleButton: any
}) => {
	const { handleUpdateInfor, user, onChangeDate, date, disibleButton } = props

	const schema = yup.object({
		fullName: yup.string().required("Không được bỏ trống!"),
		sex: yup.string(),
		phone: yup.string().required("Không được bỏ trống!"),
		email: yup
			.string()
			.email("Vui lòng nhập đúng định dạng mail")
			.required("Không được bỏ trống!"),
	})

	const {
		register,
		handleSubmit,
		reset,
		watch,
		control,
		formState: { errors, isValid },
	} = useForm({
		defaultValues: {
			sex: !isEmpty(user) ? user?.gender : "undefined",
		},
		values:
			{
				email: user?.email,
				fullName: user?.name,
				phone: user?.phone,
			} || undefined,
		mode: "onChange",
		resolver: yupResolver(schema),
	})

	const sex = watch("sex")

	return (
		<div className="bg-white rounded-t-[20px] -mt-[10px] p-[] relative z-10 pt-[45px] ">
			<p className="text-xl text-center font-bold">{user?.name}</p>
			<form onSubmit={handleSubmit(handleUpdateInfor)} className="">
				<Text className="text-center font-medium text-xl">
					{user?.name ? "" : "Chưa cập nhật"}
				</Text>
				<div className="px-3 py-4">
					<div className="">
						<input
							{...register("fullName")}
							placeholder="Họ tên"
							defaultValue={user?.name}
							className="h-[40px] px-3 border border-neutral-300 rounded-md text-sm focus:outline-none mt-1 w-full"
						/>
						{errors.fullName?.message && (
							<p className="text-xs text-red-500 mt-1">
								{errors.fullName?.message}
							</p>
						)}
					</div>
					<div className="mt-2 h-[40px] flex items-center">
						<Text className="text-sm text-neutral-500">
							Chọn giới tính:
						</Text>
						<Controller
							render={(field) => {
								const checkField = !isEmpty(field)
									? field?.field?.value === "undefined"
										? !isEmpty(user)
											? user?.gender.toString()
											: "undefined"
										: sex
									: "undefined"

								return (
									<>
										<div className="ml-10 flex gap-2 items-center">
											<input
												id="man"
												type="radio"
												className="hidden"
												value={"1"}
												{...register("sex")}
											/>
											<label
												htmlFor="man"
												className={`${
													checkField === "1"
														? "text-blue-500"
														: "text-neutral-500"
												}  text-sm  flex gap-1 items-center`}
											>
												<IconCustom
													name="manIcon"
													stroke={
														checkField === "1"
															? "#3B82F6"
															: "#969ba2"
													}
												/>{" "}
												Nam
											</label>
										</div>
										<div className="ml-10 flex gap-2 items-center">
											<input
												id="woman"
												type="radio"
												className="hidden"
												value={"2"}
												{...register("sex")}
											/>
											<label
												htmlFor="woman"
												className={`${
													checkField === "2"
														? "text-pink-500"
														: "text-neutral-500"
												}  text-sm  flex gap-1 items-center`}
											>
												<IconCustom
													name="womanIcon"
													stroke={
														checkField === "2"
															? "#EC4899"
															: "#969ba2"
													}
												/>{" "}
												Nữ
											</label>
										</div>
									</>
								)
							}}
							name="sex"
							control={control}
						/>
					</div>
					{errors.sex?.message && (
						<p className="text-xs text-red-500 mt-1">
							{errors.sex?.message}
						</p>
					)}
					<div className="mt-2">
						<DatePicker
							mask
							maskClosable
							dateFormat="dd/mm/yyyy"
							title="Chọn ngày"
							value={
								new Date(
									date.value === undefined
										? user?.dateOfBirth
										: date.value
								)
							}
							onChange={onChangeDate}
							inputClass="h-[40px]"
						/>
					</div>
					<div className="mt-2">
						<div className=" h-[40px] border border-neutral-300 rounded-md mt-1 flex items-center px-2 gap-2">
							<FlagIcon />
							<p className="text-sm border-r border-neutral-400 pr-[10px]">
								+84
							</p>
							<input
								defaultValue={
									user?.phone ? user?.phone.slice(1, 10) : ""
								}
								{...register("phone")}
								maxLength={10}
								placeholder="Số điện thoại"
								className=" px-3 rounded-md text-sm focus:outline-none  w-full"
							/>
						</div>
						{errors.phone?.message && (
							<p className="text-xs text-red-500 mt-1">
								{errors.phone?.message}
							</p>
						)}
					</div>
					<div className="mt-2">
						<input
							{...register("email")}
							defaultValue={
								isEmpty(user?.email) ? "" : user?.email
							}
							placeholder="Email"
							className="h-[40px] px-3 border border-neutral-300 rounded-md text-sm focus:outline-none mt-1 w-full"
						/>
						{errors.email?.message && (
							<p className="text-xs text-red-500 mt-1">
								{errors.email?.message}
							</p>
						)}
					</div>
				</div>

				<div className=" m-3">
					<input
						disabled={disibleButton}
						value="Lưu thay đổi"
						type="submit"
						className=" text-base w-full text-white bg-[#1479FF] font-bold text-center rounded-lg h-[48px]"
					/>
				</div>
			</form>
		</div>
	)
}

export default FormInformation
