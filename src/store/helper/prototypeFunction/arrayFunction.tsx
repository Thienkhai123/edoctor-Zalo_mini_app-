declare global {
	interface Array<T> {
		orderBy(predicate: (value: T) => number | Date): Array<T>
		orderByDescending(predicate: (value: T) => number | Date): Array<T>
	}
}

const compareValues = (
	a: number | string | Date,
	b: number | string | Date,
): number => {
	if (a === b) {
		return 0
	}
	return a < b ? -1 : 1
}

Array.prototype.orderBy = function <T>(
	predicate: (value: T) => number | Date,
): Array<T> {
	return this.slice().sort((a, b) =>
		compareValues(predicate(a), predicate(b)),
	)
}

Array.prototype.orderByDescending = function <T>(
	predicate: (value: T) => number | Date,
): Array<T> {
	return this.slice().sort((a, b) =>
		compareValues(predicate(b), predicate(a)),
	)
}

export {}
