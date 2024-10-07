export default interface IFileHeadthy {
	createdAt: string
	addressWord: string
	descriptionDoctor: string
	reviewByDoctor: string
	id: number
	diagnosis: string
	treatmentGuidelines: string
	risk: number
	isConfirm: boolean
	userConfirm: any
	riskColor: string
	riskDisplay: string
	createdByUserId: any
	createdByUser: any
}
