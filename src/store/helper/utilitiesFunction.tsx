import { toast } from "react-toastify"

export const getRemainedTime = (data: Date): string => {
	const timeDifference = new Date(data).getTime() - new Date().getTime()
	if (timeDifference <= 0) {
		return "Trễ hẹn"
	}
	const MILLISECOND_IN_MINUTE = 1000 * 60
	const MILLISECOND_IN_HOUR = MILLISECOND_IN_MINUTE * 60
	const MILLISECOND_IN_DAY = MILLISECOND_IN_HOUR * 24
	const days = Math.floor(timeDifference / MILLISECOND_IN_DAY)
	const hours = Math.floor(
		(timeDifference % MILLISECOND_IN_DAY) / MILLISECOND_IN_HOUR
	)
	const minutes = Math.floor(
		(timeDifference % MILLISECOND_IN_HOUR) / MILLISECOND_IN_MINUTE
	)
	let result = "Còn"
	if (days !== 0) {
		result += ` ${days} ngày`
	}
	if (hours !== 0) {
		result += ` ${hours} giờ`
	}
	if (minutes !== 0) {
		result += ` ${minutes} phút`
	}
	return result
}

export const showSuccess = (message: string) => {
	toast.success(message, {
		position: "top-center",
		autoClose: 500,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: false,
		draggable: false,
		progress: undefined,
		theme: "colored",
	})
}

export const showError = (message: string) => {
	toast.error(message, {
		position: "top-center",
		autoClose: 500,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: false,
		draggable: false,
		progress: undefined,
		theme: "colored",
	})
}

export const calculateAge = (birthDate: any) => {
	const today = new Date()
	const birthday = new Date(birthDate)
	let age = today.getFullYear() - birthday.getFullYear()
	return age
}

export const currentDateAndWeekdays = () => {
	const today = new Date()
	const weekdays = [
		"Chủ Nhật",
		"Thứ Hai",
		"Thứ Ba",
		"Thứ Tư",
		"Thứ Năm",
		"Thứ Sáu",
		"Thứ Bảy",
	]
	const day = today.getDate()
	const dayOrWeek = today.getDay()
	const month = today.getMonth() + 1
	const year = today.getFullYear()
	return `${weekdays[dayOrWeek]},${day}/${month}/${year}`
}

export const currentAge = (birthday: any) => {
	const today = new Date()
	const myBirthday = new Date(birthday)
	const todayYear = today.getFullYear()
	const birthYear = myBirthday.getFullYear()
	let age = todayYear - birthYear
	return age
}

export const currentDate = () => {
	const today = new Date()
	const day = today.getDate()
	const month = today.getMonth() + 1
	const year = today.getFullYear()
	return `${day}/${month}/${year}`
}

export const currentCustomDate = (date: any) => {
	const dateTime = new Date(date)
	const day = dateTime.getDate()
	const month = dateTime.getMonth() + 1
	const year = dateTime.getFullYear()
	return `${day}/${month}/${year}`
}

export const currentTime = (date: any, type = 0) => {
	const dateTime = new Date(date)
	const hours = dateTime.getHours()
	const minites = dateTime.getMinutes()
	if (type === 0) {
		return `${hours > 9 ? hours : `0${hours}`}:${
			minites > 9 ? minites : `0${minites}`
		}`
	}
	if (type === 1) {
		if (minites > 30) {
			return `${hours + 1 > 9 ? hours + 1 : `0${hours + 1}`}:00`
		} else {
			return `${hours > 9 ? hours : `0${hours}`}:00`
		}
	}
	return
}
