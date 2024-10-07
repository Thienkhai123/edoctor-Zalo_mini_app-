import React from "react"
import { Route } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import {
	AnimationRoutes,
	App,
	Box,
	Page,
	SnackbarProvider,
	ZMPRouter,
} from "zmp-ui"
import { routes } from "./store/routes"

const BaseApp = () => {
	return (
		<App>
			<SnackbarProvider>
				<ZMPRouter>
					<Box
						flex
						flexDirection="column"
						className="h-screen bg-white"
					>
						<Page className="h-fit">
							<AnimationRoutes>
								{routes.map((item: any) => (
									<Route
										key={item.path}
										path={item.path}
										element={React.createElement(
											item.component
										)}
									/>
								))}
							</AnimationRoutes>
						</Page>
					</Box>
				</ZMPRouter>
				<ToastContainer />
			</SnackbarProvider>
		</App>
	)
}

export default BaseApp
