export const converUrlImage = async (URL: string) => {
	const canvas = document.createElement("canvas")
	const ctx: any = canvas.getContext("2d")
	const imageUrl = URL
	const img = new Image()
	img.crossOrigin = "Anonymous"
	img.src = imageUrl
	ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
	const dataURL = canvas.toDataURL("image/png")
	const blob = await (await fetch(dataURL)).blob()
	const fileImg = new File([blob], "userUpload.jpeg", {
		type: blob?.type,
	})
	return fileImg
}
