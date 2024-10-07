import React, { useEffect, useState } from "react"
import IconCustom from "../../../../share-components/icons/IconsCustom"
import TreatmentRegimenTableComponent from "../components/treatmentRegimenTableComponent"
import { getTreatmentTarget } from "../../../../store/apis/home"
import {
	currentCustomDate,
	currentTime,
} from "../../../../store/helper/utilitiesFunction"
import { useParams } from "react-router-dom"
import Loading from "../../../../share-components/Loading"

const InformationTreatmentRegimenContainer = () => {
	const { patientId } = useParams()
	const [treamets, setTreamet] = useState<any>({})
	const [loading, setLoading] = useState<any>(true)

	useEffect(() => {
		const fetchChartData = async () => {
			setLoading(true)
			try {
				const response = await getTreatmentTarget({
					patientId: patientId,
				})
				if (response?.response?.status === 400) {
					setTreamet([])
				} else {
					setTreamet(response?.data)
				}
			} catch (error) {
				throw error
			}
			setLoading(false)
		}
		fetchChartData()
	}, [])

	return (
		<>
			{loading ? (
				<Loading />
			) : (
				<div className="pt-1 px-[10px]">
					<p className="text-center text-sm uppercase font-bold leading-[16px]">
						MỤC TIÊU ĐIỀU TRỊ
					</p>
					{treamets?.formTemplates?.length > 0 ? (
						<div className="mt-[35px]">
							<div className="flex gap-[6px] items-center">
								<div className="min-w-[32px]">
									<IconCustom name="doctorIcon" />
								</div>
								<p className="text-xs font-normal">
									{treamets?.note}
								</p>
							</div>
							<div className="mt-2">
								<p className="text-[#D22D3D] font-normal text-sm">
									Được xác nhận bởi bác sĩ:{" "}
									<span className="font-bold">
										{treamets?.userConfirm &&
											treamets?.userConfirm?.name}
									</span>
								</p>
							</div>
							<div className="mt-1">
								<p className=" font-normal text-sm">
									Ghi nhận lúc:{" "}
									<span className="font-bold">
										{currentTime(treamets?.createdAt)}{" "}
										{currentCustomDate(treamets?.createdAt)}
									</span>
								</p>
							</div>
							<div className="mt-[14px]">
								<TreatmentRegimenTableComponent
									treamets={treamets?.formTemplates}
								/>
							</div>
						</div>
					) : (
						<p className="text-xs font-normal text-center mt-5">
							Không có mục tiêu điều trị
						</p>
					)}
				</div>
			)}
		</>
	)
}

export default InformationTreatmentRegimenContainer
