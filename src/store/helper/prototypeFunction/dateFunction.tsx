declare global {
	interface Date {
		toVietnameseTimeString(): string
		toVietnameseDateString(): string
		toVietnameseString(): string
	}
}

Date.prototype.toVietnameseTimeString = function () {
	const hour = this.getHours().toString().padStart(2, "0")
	const minute = this.getMinutes().toString().padStart(2, "0")
	return `${hour}:${minute}`
}

Date.prototype.toVietnameseDateString = function () {
	const date = this.getDate().toString().padStart(2, "0")
	const month = (this.getMonth() + 1).toString().padStart(2, "0")
	const year = this.getFullYear()
	return `${date}/${month}/${year}`
}

Date.prototype.toVietnameseString = function () {
	const vietnameseTimeString = this.toVietnameseTimeString()
	const vietnameseDateString = this.toVietnameseDateString()
	return `${vietnameseTimeString}, ${vietnameseDateString}`
}

export {}
