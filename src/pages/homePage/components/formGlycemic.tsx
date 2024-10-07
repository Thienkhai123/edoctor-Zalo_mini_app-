import React, { useState } from "react"
import { Box, Select } from "zmp-ui"
import { SelectValueType } from "zmp-ui/select"

const { Option } = Select

const FormGlycemic = ({
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
	const [bloodSugarUnit, setBloodSugarUnit] = useState<any>(1)

	const onChangeValue = (selected: SelectValueType | SelectValueType[]) => {
		setBloodSugarUnit(selected)
	}

	const handleChange = (
		e?: any,
		name?: string,
		type?: number,
		formTemplateId?: number,
		isChecked?: boolean
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
						bloodSugarUnit: bloodSugarUnit,
					}
					setFormValue([...formValue, value])
				} else {
					const value = {
						value: e?.target?.value,
						type: type,
						name: name,
						formTemplateId: formTemplateId,
						isChecked: isChecked,
						bloodSugarUnit: bloodSugarUnit,
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
				bloodSugarUnit: bloodSugarUnit,
			}
			setFormValue([...formValue, value])
		}
	}

	return (
		<>
			<div className="mt-3">
				<div className="flex justify-between">
					<p className="text-sm">{displayName} </p>
					<p
						className="text-sm text-[#0055C4] italic"
						onClick={() => handleOnModalGuide(idForm)}
					>
						Hướng dẫn đo
					</p>
				</div>
				<div className="flex gap-[10px]">
					<div className="min-w-[212px]">
						<input
							name={name}
							onChange={(e) => {
								handleChange(
									e,
									name,
									type,
									formTemplateId,
									isChecked
								)
							}}
							type="number"
							value={defaultValue}
							className="h-[40px] w-full px-3 border border-neutral-300 rounded-md text-sm focus:outline-none mt-1 "
						/>
					</div>
					<div className="">
						<Box>
							<Select
								onChange={onChangeValue}
								value={bloodSugarUnit}
								className="h-[40px]  w-full px-3 border border-neutral-300 rounded-md text-sm focus:outline-none mt-1 "
							>
								<Option value={1} title="mg/dl" />
								<Option value={0} title="mmol/l" />
							</Select>
						</Box>
					</div>
				</div>
			</div>
		</>
	)
}

export default FormGlycemic
