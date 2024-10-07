import RiskPage from "../../pages/risk"
import DangerDetailPage from "../../pages/risk/dangerDetailPage"
import DangerPage from "../../pages/risk/dangerPage"
import ResultRiskPage from "../../pages/risk/resultRiskPage"

const riskPageConfig = [
	{
		path: "/risk",
		component: RiskPage,
	},
	{
		path: "/risk/resultRiskFactor/:type/:id",
		component: ResultRiskPage,
	},
	{
		path: "/risk/dangerRisk",
		component: DangerPage,
	},
	{
		path: "/risk/dangerDetailRisk/:id",
		component: DangerDetailPage,
	},
]

export default riskPageConfig
