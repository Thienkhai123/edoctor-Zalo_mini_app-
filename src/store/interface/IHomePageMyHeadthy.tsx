export default interface IHomePageMyHeadthy {
	user: {
		avatarUrl: string
		image: string
		name: string
		gender: number
		dateOfBirth: string
		address: string
		hi: string
		risk: number
		id: number
		weight: number
		height: number
		bmiValue: number
		riskColor: string
		patientDangerousDisplay: string
		medicalRecordId: number
		medicalRecord: any
		isHasNewNoti: boolean
		newNotiCount: number
	}
	phone?: any
}
