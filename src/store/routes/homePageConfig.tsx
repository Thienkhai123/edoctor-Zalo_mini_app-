import HomePage from "../../pages/homePage"
import DetailHeadthy from "../../pages/homePage/detailHeadthy"
import TreatmentRegimenPage from "../../pages/homePage/treatmentRegimenPage"

const homePageConfig = [
	{
		path: "/",
		component: HomePage,
	},
	{
		path: "/homePage/detailHeadthy",
		component: DetailHeadthy,
	},
	{
		path: "/homePage/treatmentRegimenPage",
		component: TreatmentRegimenPage,
	},
]

export default homePageConfig
