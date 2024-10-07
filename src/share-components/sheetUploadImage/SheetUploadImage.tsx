import React from "react"
import { Sheet, Text } from "zmp-ui"

const SheetUploadImage = ({
	handleChooseImage = (data: any) => {},
	sheetVisible = false,
	setSheetVisible = (data: any) => {},
}) => {
	return (
		<Sheet
			visible={sheetVisible}
			onClose={() => setSheetVisible(false)}
			autoHeight
			// height={500}
			mask
			handler
			swipeToClose
		>
			<div className="p-[16px_16px_30px_16px]">
				<div
					onClick={() => handleChooseImage("camera")}
					className="h-[50px] flex items-center justify-center  rounded-full"
				>
					<Text className=" font-normal text-center text-base ">
						Chụp hình ảnh
					</Text>
				</div>
				<div
					onClick={() => handleChooseImage("album")}
					className="h-[50px] mt-3 flex items-center justify-center bg-blue-500 rounded-full"
				>
					<Text className=" font-normal text-center text-base text-white">
						Chọn ảnh từ thư viện
					</Text>
				</div>
			</div>
		</Sheet>
	)
}

export default SheetUploadImage
