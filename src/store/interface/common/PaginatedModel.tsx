export default interface PaginatedModel<T> {
	data: T[]
	recordsTotal: number
	recordsFiltered: number
	currentPage: number
	currentRecords: number
	pageSize: number
	totalPages: number
}
