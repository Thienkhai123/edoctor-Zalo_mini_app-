import React, { FC, useEffect, useState } from "react"
import { useNavigate } from "zmp-ui"
import FileHeadthyItem from "../components/fileHeadthyItem"
import IHomePageMyHeadthy from "../../../store/interface/IHomePageMyHeadthy"
import { getMedicalRecordHistory } from "../../../store/apis/history"
import LoadingComponent from "../../../share-components/loadingComponent"

const RiskPageHistoryContainer: FC<IHomePageMyHeadthy> = (props) => {
	const { user } = props
	const navigate = useNavigate()
	const [historyMedical, setHistoryMedical] = useState<any>([])
	const [loading, setLoading] = useState<any>(true)

	const handleFileDetail = (id: 1) => {
		navigate(`/risk/resultRiskFactor/riskDetail/${id}`)
	}

	useEffect(() => {
		const fetchUserData = async () => {
			setLoading(true)
			try {
				const responseForm = await getMedicalRecordHistory({
					patientId: user?.id,
				})
				setHistoryMedical(responseForm)
			} catch (error) {
				navigate("/", { replace: true })
			}
			setLoading(false)
		}
		fetchUserData()
	}, [user?.id])

	return (
		<div className="mt-[170px] px-[28px]">
			{loading ? (
				<LoadingComponent />
			) : (
				<div className="my-2 flex flex-col gap-2">
					{historyMedical?.data?.map((elm: any, ind: number) => {
						return (
							<div key={ind}>
								<FileHeadthyItem
									data={elm}
									handleFileDetail={handleFileDetail}
								/>
							</div>
						)
					})}
				</div>
			)}
		</div>
	)
}

export default RiskPageHistoryContainer
