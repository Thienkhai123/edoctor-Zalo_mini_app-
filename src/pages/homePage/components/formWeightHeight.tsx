import React from "react"

const FormWeightHeight = (props: { register: any; errors: any }) => {
	const { register, errors } = props

	return (
		<div>
			<div className="mt-3">
				<div className="flex justify-between">
					<p className="text-sm">Chiều cao (cm)</p>
				</div>
				<input
					{...register("height")}
					type="number"
					defaultValue={""}
					className="h-[40px] px-3 border border-neutral-300 rounded-md text-sm focus:outline-none mt-1 w-full"
				/>
				{errors.height?.message && (
					<p className="text-xs text-red-500 mt-1">
						{errors.height?.message}
					</p>
				)}
			</div>
			<div className="mt-3">
				<div className="flex justify-between">
					<p className="text-sm">Chỉ số cân nặng (kg)</p>
				</div>
				<input
					{...register("weight")}
					type="number"
					defaultValue={""}
					className="h-[40px] px-3 border border-neutral-300 rounded-md text-sm focus:outline-none mt-1 w-full"
				/>
				{errors.weight?.message && (
					<p className="text-xs text-red-500 mt-1">
						{errors.weight?.message}
					</p>
				)}
			</div>
		</div>
	)
}

export default FormWeightHeight
