import React from "react"
import IconCustom from "../../../../share-components/icons/IconsCustom"
import defaultAvatar from "../../../../../src/images/defaultAvatar.jpg"

const ImageAccount = (props: {
	takePicture: (data: boolean) => void
	avatarUrl: string
	avatarUrlUpload: any
}) => {
	const { takePicture, avatarUrl, avatarUrlUpload } = props
	return (
		<div>
			<div className="relative flex flex-col items-center justify-center">
				<div className="h-[175px] overflow-hidden blur-sm">
					<img
						src={
							avatarUrlUpload?.length > 0
								? avatarUrlUpload
								: avatarUrl === null
								? defaultAvatar
								: avatarUrl
						}
						className="object-cover "
					/>
				</div>
				<div
					onClick={() => takePicture(true)}
					className="absolute -bottom-[30px] border-[4px] border-slate-200 rounded-full z-20"
				>
					<img
						src={
							avatarUrlUpload?.length > 0
								? avatarUrlUpload
								: avatarUrl === null
								? defaultAvatar
								: avatarUrl
						}
						className="object-cover rounded-full h-[80px] w-[80px]"
					/>
					<div className="absolute bottom-0 right-0">
						<IconCustom name="cameraIcon" />
					</div>
				</div>
			</div>
		</div>
	)
}

export default ImageAccount
