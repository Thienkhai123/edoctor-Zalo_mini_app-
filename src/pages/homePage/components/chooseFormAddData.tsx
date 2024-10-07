import React from "react"

const ChooseFormAddData = ({
	handleChooseFormData = (idForm: number) => {},
	setSheetFormDataVisible = (type: boolean) => {},
}) => {
	return (
		<div className="rounded-t-[10px]">
			<div className="py-[10px]">
				<p className="text-center text-sm font-bold">
					Chọn loại dữ liệu cần thêm
				</p>
			</div>
			<div
				className="py-[10px] border-t border-[#9797]"
				onClick={() => handleChooseFormData(1)}
			>
				<p className="text-center text-xs font-normal">
					Chỉ số tim mạch (Huyết áp, nhịp tim)
				</p>
			</div>
			<div
				className="py-[10px] border-t border-[#9797]"
				onClick={() => handleChooseFormData(3)}
			>
				<p className="text-center text-xs font-normal">
					Chiều cao, cân nặng
				</p>
			</div>
			<div
				className="py-[10px] border-t border-[#9797]"
				onClick={() => handleChooseFormData(2)}
			>
				<p className="text-center text-xs font-normal">
					Chỉ số đường huyết
				</p>
			</div>
			<div
				className="py-[10px] border-t border-[#9797]"
				onClick={() => setSheetFormDataVisible(false)}
			>
				<p className="text-center text-xs font-normal">Đóng</p>
			</div>
		</div>
	)
}

export default ChooseFormAddData
