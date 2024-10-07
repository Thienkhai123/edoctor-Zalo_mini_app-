import React from "react"

const TreatmentRegimenTableComponent = (props: { treamets: any }) => {
	const { treamets } = props

	return (
		<div className="w-full border border-[#006AF8] rounded-[10px] py-2 px-1">
			<div className="w-full grid grid-cols-2 gap-1">
				{treamets?.map((elm: any, ind: number) => {
					return (
						<>
							<p
								className="text-xs font-normal leading-[22px] "
								style={{ wordBreak: "break-word" }}
							>
								{ind + 1}. {elm?.displayName} {elm?.value}
							</p>
						</>
					)
				})}
			</div>
		</div>
	)
}

export default TreatmentRegimenTableComponent
