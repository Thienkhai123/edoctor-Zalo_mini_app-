import React from "react"
import { Button } from "zmp-ui"

const GuideComponent = ({
	description = "Chuẩn bị:Sử dụng một máy đo huyết áp điện tử có cổ tay hoặc bắp tay.	Đảm bảo bạn đã nghỉ ngơi ít nhất 30 phút và không hút thuốc lá, uống cà phê hoặc tập thể dục trước khi đo.",
	setDialogVisible = (p0: boolean) => {},
}) => {
	return (
		<div>
			<p className="text-center font-bold text-sm">Hướng dẫn đo</p>
			<div
				dangerouslySetInnerHTML={{ __html: description }}
				className="text-sm mt-2"
			/>
			<Button
				onClick={() => setDialogVisible(false)}
				className=" text-base w-full mt-[14px] text-white bg-[#1479FF] font-bold text-center rounded-lg"
			>
				Đã hiểu
			</Button>
		</div>
	)
}

export default GuideComponent
