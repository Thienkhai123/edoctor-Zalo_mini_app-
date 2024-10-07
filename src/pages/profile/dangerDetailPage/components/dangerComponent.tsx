import React from "react"
import { Box } from "zmp-ui"

const DangerComponent = ({
	title = "Rối loạn chuyển hóa lipid",
	name = "RLCHLP",
	formTemplateId = 0,
	isChecked = false,
	type = 0,
	handleData = (
		formTemplateId: number,
		name: string,
		isChecked: boolean,
		type: number,
		value: any
	) => {},
	dataActive = [],
	ind = 0,
}) => {
	const objectData: any = dataActive.find((el: any) => el?.name === name)

	return (
		<Box>
			<p className="text-[16px] font-normal">+ {title}</p>
			<div className="flex gap-3 justify-center mt-3">
				<div
					onClick={() =>
						handleData(formTemplateId, name, true, type, "")
					}
					className={`${
						// (
						// 	objectData?.isChecked === undefined
						// 		? isChecked
						// 		: objectData?.isChecked
						// )
						isChecked
							? "border-[3px] border-[#4196ff]"
							: "border-[3px] border-[#E7F2FF]"
					} flex justify-center gap-[3px] items-center rounded-[16px] w-[101px] py-[10px] bg-[#E7F2FF]`}
				>
					<p className="text-[14px] font-normal">Có</p>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="19"
						height="19"
						viewBox="0 0 19 19"
						fill="none"
					>
						<path
							d="M9.25 1.23138C4.90117 1.23138 1.375 4.75756 1.375 9.10638C1.375 13.4552 4.90117 16.9814 9.25 16.9814C13.5988 16.9814 17.125 13.4552 17.125 9.10638C17.125 4.75756 13.5988 1.23138 9.25 1.23138ZM12.1574 12.0982L10.9973 12.0929L9.25 10.0099L7.50449 12.0911L6.34258 12.0964C6.26523 12.0964 6.20195 12.0349 6.20195 11.9558C6.20195 11.9224 6.21426 11.8908 6.23535 11.8644L8.52226 9.13978L6.23535 6.41693C6.21411 6.39117 6.20232 6.35891 6.20195 6.32552C6.20195 6.24818 6.26523 6.1849 6.34258 6.1849L7.50449 6.19017L9.25 8.27318L10.9955 6.19193L12.1557 6.18666C12.233 6.18666 12.2963 6.24818 12.2963 6.32728C12.2963 6.36068 12.284 6.39232 12.2629 6.41869L9.97949 9.14154L12.2646 11.8661C12.2857 11.8925 12.298 11.9242 12.298 11.9576C12.298 12.0349 12.2348 12.0982 12.1574 12.0982Z"
							fill="#89BCFF"
						/>
					</svg>
				</div>
				<div
					onClick={() =>
						handleData(formTemplateId, name, false, type, null)
					}
					className={`${
						// (
						// 	objectData?.isChecked === undefined
						// 		? isChecked === false
						// 		: objectData?.isChecked === false
						// )
						isChecked === false
							? "border-[3px] border-[#4196ff]"
							: "border-[3px] border-[#E7F2FF]"
					} flex  justify-center gap-[3px] items-center rounded-[16px] w-[101px] py-[10px] bg-[#E7F2FF]`}
				>
					<p className="text-[14px] font-normal">Không</p>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="19"
						height="19"
						viewBox="0 0 19 19"
						fill="none"
					>
						<path
							d="M9.75 1.23143C5.40117 1.23143 1.875 4.7576 1.875 9.10643C1.875 13.4553 5.40117 16.9814 9.75 16.9814C14.0988 16.9814 17.625 13.4553 17.625 9.10643C17.625 4.7576 14.0988 1.23143 9.75 1.23143ZM12.6574 12.0982L11.4973 12.093L9.75 10.0099L8.00449 12.0912L6.84258 12.0965C6.76523 12.0965 6.70195 12.0349 6.70195 11.9558C6.70195 11.9224 6.71426 11.8908 6.73535 11.8644L9.02226 9.13983L6.73535 6.41698C6.71411 6.39121 6.70232 6.35896 6.70195 6.32557C6.70195 6.24823 6.76523 6.18495 6.84258 6.18495L8.00449 6.19022L9.75 8.27323L11.4955 6.19198L12.6557 6.1867C12.733 6.1867 12.7963 6.24823 12.7963 6.32733C12.7963 6.36073 12.784 6.39237 12.7629 6.41873L10.4795 9.14159L12.7646 11.8662C12.7857 11.8926 12.798 11.9242 12.798 11.9576C12.798 12.0349 12.7348 12.0982 12.6574 12.0982Z"
							fill="#D4380D"
						/>
					</svg>
				</div>
			</div>
		</Box>
	)
}

export default DangerComponent
