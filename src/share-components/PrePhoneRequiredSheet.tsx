import React from "react"
import { Box, Button, Sheet, Text } from "zmp-ui"

const PrePhoneRequiredSheet = (props: {
	visible: boolean
	onClose: () => void
}) => {
	const { visible, onClose } = props
	return (
		<Sheet visible={visible} onClose={onClose} autoHeight mask handler>
			<Box p={4} flex flexDirection="column">
				<Box my={4}>
					<Text.Title>Cho phép eDoctor truy cập</Text.Title>
				</Box>
				<Box style={{ overflowY: "auto" }}>
					<Text>
						eDoctor sẽ sử dụng số điện thoại của bạn để hoạt động
						chức năng liên quan đến giỏ hàng, đổi quà, đặt lịch. Vui
						lòng cung cấp cho chúng tôi quyền truy cập số điện
						thoại.
					</Text>
				</Box>
				<Box flex flexDirection="row" mt={1}>
					<Box style={{ flex: 1 }}>
						<Button
							fullWidth
							onClick={onClose}
							className="bg-blue-600"
						>
							Đã hiểu
						</Button>
					</Box>
				</Box>
			</Box>
		</Sheet>
	)
}

export default PrePhoneRequiredSheet
