import React from "react"
import { Box } from "zmp-ui"
import {
	currentCustomDate,
	currentDate,
	currentTime,
} from "../../../../store/helper/utilitiesFunction"

const table = [
	"Ngày/giờ kiểm tra",
	"Huyết áp (mmHg)",
	"Nhịp tim BPM",
	"Tình trạng",
]

const TableHeadthy = ({ bloodResults = [] }) => {
	return (
		<>
			<Box className=" bg-[#5296fd] flex gap-2 px-2 justify-center py-2 items-center">
				{table?.map((elm, ind) => {
					return (
						<p className="text-sm text-white break-words w-full">
							{elm}
						</p>
					)
				})}
			</Box>
			{bloodResults?.map((elm: any, ind: number) => {
				return (
					<div>
						<p
							key={ind}
							className="text-neutral-700 bg-neutral-100 text-sm py-3 px-2"
						>
							{currentCustomDate(elm?.date) === currentDate()
								? "Hôm nay"
								: currentCustomDate(elm?.date)}
						</p>
						{elm?.userForms
							?.reverse()
							?.map((element: any, idx: number) => {
								const heartRate = element?.formTemplates?.find(
									(value: any) => value?.name === "NHIP_TIM"
								)
								const systolicBloodPressure =
									element?.formTemplates?.find(
										(value: any) =>
											value?.name === "HA_TAMTHU"
									)
								const diastolicBloodPressure =
									element?.formTemplates?.find(
										(value: any) =>
											value?.name === "HA_TAMTRUONG"
									)

								return (
									<div key={idx}>
										<div className=" flex gap-2 px-2 justify-center py-3 items-center border-b border-b-neutral-100">
											<div className="w-full">
												<p className="text-sm break-words">
													{currentTime(
														element?.createdAt
													)}
												</p>
											</div>
											<div className="w-full">
												<p className="text-sm text-orange-400 break-words">
													{
														systolicBloodPressure?.value
													}
													/
													{
														diastolicBloodPressure?.value
													}
												</p>
											</div>
											<div className="w-full">
												<p className="text-sm break-words">
													{heartRate?.value}
												</p>
											</div>
											<div className="w-full">
												<p className="text-sm text-orange-400 break-words">
													{
														element?.bloodPressureStatus
													}
												</p>
											</div>
										</div>
									</div>
								)
							})}
					</div>
				)
			})}
		</>
	)
}

export default TableHeadthy
