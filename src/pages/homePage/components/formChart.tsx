import React from "react"

const FormChart = ({
	name = "CHUAN_DOAN",
	displayName = "Chẩn đoán",
	type = 0,
	idForm = 0,
	formTemplateId = 104,
	formValue = [] as {}[],
	setFormValue = (p0: {}[]) => {},
	isChecked,
	defaultValue = 0,
	handleOnModalGuide = (idForm: number) => {},
}) => {
	const handleChange = (
		e: any,
		name: string,
		type: number,
		formTemplateId: number,
		isChecked: boolean
	) => {
		if (formValue.length >= 1) {
			formValue?.forEach((elm: any, ind: number) => {
				if (elm.name === e?.target?.name) {
					formValue.splice(ind, 1)
					const value = {
						value: e?.target?.value,
						type: type,
						name: name,
						formTemplateId: formTemplateId,
						isChecked: isChecked,
					}
					setFormValue([...formValue, value])
				} else {
					const value = {
						value: e?.target?.value,
						type: type,
						name: name,
						formTemplateId: formTemplateId,
						isChecked: isChecked,
					}
					setFormValue([...formValue, value])
				}
			})
		} else {
			const value = {
				value: e?.target?.value,
				type: type,
				name: name,
				formTemplateId: formTemplateId,
				isChecked: isChecked,
			}
			setFormValue([...formValue, value])
		}
	}

	return (
		<div className="mt-3">
			<div className="flex justify-between">
				<p className="text-sm">{displayName}</p>
				<p
					className="text-sm text-[#0055C4] italic"
					onClick={() => handleOnModalGuide(idForm)}
				>
					Hướng dẫn đo
				</p>
			</div>
			<input
				name={name}
				value={defaultValue}
				type="number"
				onChange={(e) => {
					handleChange(e, name, type, formTemplateId, isChecked)
				}}
				className="h-[40px] px-3 border border-neutral-300 rounded-md text-sm focus:outline-none mt-1 w-full"
			/>
		</div>
	)
}

export default FormChart
