import ProfilePage from "../../pages/profile"
import ClausePage from "../../pages/profile/clausepage"
import CreateFamilyProfilePage from "../../pages/profile/createFamilyProfilePage"
import DangerDetailPage from "../../pages/profile/dangerDetailPage"
import DangerPage from "../../pages/profile/dangerPage"
import DetailHeadthy from "../../pages/profile/detailHeadthy"
import FamalyProfilePage from "../../pages/profile/famalyProfilepage"
import FamilyPendingAccessProfilePage from "../../pages/profile/familyPendingAccessProfilePage"
import FamilyRequestAccess from "../../pages/profile/familyRequestAccess"
import InformationAccountPage from "../../pages/profile/informationAccountPage"
import InformationFamilyPage from "../../pages/profile/informationFamilyPage"
import MyQRCode from "../../pages/profile/myQRCode"
import ParaclinicalResultsPage from "../../pages/profile/paraclinicalResultsPage"
import PrescriptionPage from "../../pages/profile/prescriptionPage"
import ResultRiskPage from "../../pages/profile/resultRiskPage"
import SendDoneCreateFamily from "../../pages/profile/sendDoneCreateFamily"
import SendRequestCreateFamily from "../../pages/profile/sendRequestCreateFamily"
import TreatmentRegimenPage from "../../pages/profile/treatmentRegimenPage"

const profilePageConfig = [
	{
		path: "/profile",
		component: ProfilePage,
	},
	{
		path: "/profile/:accountId",
		component: InformationAccountPage,
	},
	{
		path: "/profile/famaly/pendingAccess",
		component: FamilyPendingAccessProfilePage,
	},
	{
		path: "/profile/famaly/pendingAccess/:idFamily",
		component: FamilyRequestAccess,
	},
	{
		path: "/profile/famaly/:accountId",
		component: FamalyProfilePage,
	},
	{
		path: "/profile/famaly/create",
		component: CreateFamilyProfilePage,
	},
	{
		path: "/profile/famaly/create/sendRequest",
		component: SendRequestCreateFamily,
	},
	{
		path: "/profile/famaly/create/sendRequest/Done",
		component: SendDoneCreateFamily,
	},
	{
		path: "/profile/famaly/information/:phone",
		component: InformationFamilyPage,
	},
	{
		path: "/profile/myQrcode",
		component: MyQRCode,
	},
	{
		path: "/profile/clause",
		component: ClausePage,
	},
	{
		path: "/profile/danger",
		component: DangerPage,
	},
	{
		path: "/profile/prescription",
		component: PrescriptionPage,
	},
	{
		path: "/profile/paraclinicalResults",
		component: ParaclinicalResultsPage,
	},
	{
		path: "/profile/treatmentRegimen/:patientId",
		component: TreatmentRegimenPage,
	},
	{
		path: "/profile/riskResultPage/:phone/:id",
		component: ResultRiskPage,
	},
	{
		path: "/profile/dangerDetailPage/:phone/:id",
		component: DangerDetailPage,
	},
	{
		path: "/profile/tableDetail/:phone/:id",
		component: DetailHeadthy,
	},
]

export default profilePageConfig
