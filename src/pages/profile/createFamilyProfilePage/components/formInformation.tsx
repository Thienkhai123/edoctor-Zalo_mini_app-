import React from "react"
import { Text } from "zmp-ui"
import IconCustom from "../../../../share-components/icons/IconsCustom"
import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"

const FormInformation = (props: { handleUpdateInfor: (data: any) => void }) => {
	const { handleUpdateInfor } = props

	const schema = yup.object({
		fullName: yup.string().required("Không được bỏ trống"),
		sex: yup.string().required("Vui lòng chọn"),
		birthday: yup.string().required("Không được bỏ trống"),
		phone: yup.string().required("Không được bỏ trống"),
		email: yup.string().required("Không được bỏ trống"),
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

	const sex = watch("sex")

	return (
		<form
			onSubmit={handleSubmit(handleUpdateInfor)}
			className="bg-white rounded-t-[20px] -mt-[10px] p-[] relative z-10 pt-[45px] "
		>
			<Text className="text-center font-medium text-xl">
				Chưa cập nhật
			</Text>
			<div className="px-3 py-4">
				<div className="">
					<input
						{...register("fullName")}
						placeholder="Họ tên"
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
					<div className="ml-10 flex gap-2 items-center">
						<input
							id="man"
							// name="sex"
							type="radio"
							className="hidden"
							value={"man"}
							{...register("sex")}
						/>
						<label
							htmlFor="man"
							className={`${
								sex === "man"
									? "text-blue-500"
									: "text-neutral-500"
							}  text-sm  flex gap-1 items-center`}
						>
							<IconCustom
								name="manIcon"
								stroke={sex === "man" ? "#3B82F6" : "#969ba2"}
							/>{" "}
							Nam
						</label>
					</div>
					<div className="ml-10 flex gap-2 items-center">
						<input
							id="woman"
							// name="sex"
							type="radio"
							className="hidden"
							value={"woman"}
							{...register("sex")}
						/>
						<label
							htmlFor="woman"
							className={`${
								sex === "woman"
									? "text-pink-500"
									: "text-neutral-500"
							}  text-sm  flex gap-1 items-center`}
						>
							<IconCustom
								name="womanIcon"
								stroke={sex === "woman" ? "#EC4899" : "#969ba2"}
							/>{" "}
							Nữ
						</label>
					</div>
				</div>
				{errors.sex?.message && (
					<p className="text-xs text-red-500 mt-1">
						{errors.sex?.message}
					</p>
				)}
				<div className="mt-2">
					<input
						{...register("birthday")}
						placeholder="Ngày sinh"
						className="h-[40px] px-3 border border-neutral-300 rounded-md text-sm focus:outline-none mt-1 w-full"
					/>
					{errors.birthday?.message && (
						<p className="text-xs text-red-500 mt-1">
							{errors.birthday?.message}
						</p>
					)}
				</div>
				<div className="mt-2">
					<input
						{...register("phone")}
						placeholder="Số điện thoại"
						className="h-[40px] px-3 border border-neutral-300 rounded-md text-sm focus:outline-none mt-1 w-full"
					/>
					{errors.phone?.message && (
						<p className="text-xs text-red-500 mt-1">
							{errors.phone?.message}
						</p>
					)}
				</div>
				<div className="mt-2">
					<input
						{...register("email")}
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
			{/* <div className="bg-neutral-100 h-[80px] p-4 flex items-end justify-center">
				<div className="flex gap-1 items-center">
					<IconCustom name="outIcon" />
					<Text className="text-sm text-[#c90d0d]">Đăng xuất</Text>
				</div>
			</div> */}
			<div className=" m-3">
				<input
					value="Lưu thay đổi"
					type="submit"
					className=" text-base w-full text-white bg-[#1479FF] font-bold text-center rounded-lg h-[48px]"
				/>
			</div>
		</form>
	)
}

export default FormInformation
