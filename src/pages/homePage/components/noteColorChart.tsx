import React from "react"

const NoteColorChart = ({
	color = "bg-[#0063AC]",
	text = "Huyết áp tâm trương",
}) => {
	return (
		<div className="flex gap-3 items-center">
			<div className={`min-h-[15px] min-w-[30px] ${color}`}></div>
			<p className="text-xs font-normal">{text}</p>
		</div>
	)
}

export default NoteColorChart
