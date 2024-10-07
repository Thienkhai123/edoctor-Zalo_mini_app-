export default interface ResultViewWithModel<T> {
	data: T
	isSuccess: boolean
	errorMessage: string
	successMessage: string
	statusCode: number
}
