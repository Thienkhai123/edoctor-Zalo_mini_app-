// import ArrowDown from './ArrowDown'
import React from "react"
import BodyHeightIcon from "./bodyHeightIcon/bodyHeightIcon"
import BodyWeightIcon from "./bodyWeightIcon/bodyWeightIcon"
import WaringIcon from "./waringIcon/waringIcon"
import FileHeadthyIcon from "./fileHeadthyIcon/fileHeadthyIcon"
import HeadthyIndexIcon from "./headthyIndexIcon/headthyIndexIcon"
import PrescriptionsIcon from "./prescriptionsIcon/prescriptionsIcon"
import ResultIcon from "./resultIcon/resultIcon"
import DoctorIcon from "./doctorIcon/doctorIcon"
import DefaultAvatar from "./defaultAvatarIcon"
import SettingIcon from "./settingIcon"
import FamilyIcon from "./famalyIcon"
import ArrowRightIcon from "./arrowRightIcon/arrowRightIcon"
import ClauseIcon from "./clauseIcon"
import DangerIcon from "./dangerIcon"
import OutIcon from "./outIcon/outIcon"
import CancelIcon from "./cancelIcon"
import ManIcon from "./manIcon"
import WomanIcon from "./womanIcon"
import CameraIcon from "./cameraIcon"
import HomeIcon from "./homeIcon"
import RiskIcon from "./riskIcon"
import ProfileIcon from "./profileIcon"
import ContactIcon from "./contactIcon"

type IconsCustomProps = {
	name: keyof typeof Icons
	size?: string | number
	color?: string
	stroke?: string
	fill?: string
	width?: string
	viewBox?: string
	height?: string
	scale?: string | undefined
	margin?: string
	className?: string | undefined
}
export const Icons = {
	bodyHeightIcon: BodyHeightIcon,
	bodyWeightIcon: BodyWeightIcon,
	waringIcon: WaringIcon,
	fileHeadthyIcon: FileHeadthyIcon,
	headthyIndexIcon: HeadthyIndexIcon,
	arrowRightIcon: ArrowRightIcon,
	prescriptionsIcon: PrescriptionsIcon,
	resultIcon: ResultIcon,
	doctorIcon: DoctorIcon,
	defaultAvatar: DefaultAvatar,
	settingIcon: SettingIcon,
	familyIcon: FamilyIcon,
	clauseIcon: ClauseIcon,
	dangerIcon: DangerIcon,
	outIcon: OutIcon,
	cancelIcon: CancelIcon,
	manIcon: ManIcon,
	womanIcon: WomanIcon,
	cameraIcon: CameraIcon,
	home: HomeIcon,
	risk: RiskIcon,
	profile: ProfileIcon,
	contact: ContactIcon,
} as const

const IconCustom = (props: IconsCustomProps) => {
	const {
		name,
		size,
		color,
		stroke,
		fill,
		width,
		height,
		viewBox,
		scale,
		className,
	} = props

	const IconsCustom = Icons[name]

	const iconStyle = {
		scale: size,
		color: color,
		fill: fill,
	}

	return (
		<>
			<IconsCustom
				style={iconStyle}
				fill={fill}
				stroke={stroke}
				width={width}
				height={height}
				viewBox={viewBox}
				scale={scale}
				className={className}
			/>
		</>
	)
}

IconCustom.defaultProps = {
	name: "bodyHeightIcon",
}
export default IconCustom
