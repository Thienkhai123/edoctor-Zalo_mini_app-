const API_ENDPOINT = {
	DEMO: {
		__DEFAULT__: "/api/Demo",
		GET_DEMO: "/GetDemo",
	},
	HOME: {
		GET_PATIENT_PHONE: "/api/Patient",
		GET_PATIENT_BLOOD_PRESSURE_RESULTS:
			"/api/Patient/get-blood-pressure-results",
		GET_PATIENT_HEADTH_CARE_FORM: "/api/Patient/health-care-form-template",
		GET_PATIENT_CLASSIFY_FORM: "/api/Patient/get-classify-dangerous-form",
		POST_PATIENT_CREATE_HEADTH_CARE:
			"/api/Patient/create-health-care-records",
		GET_HEADTHY_CARE_RECORD_BY_TYPE:
			"/api/Patient/get-health-care-record-by-type",
		GET_TREAMENT_TARGET: "/api/Patient/get-treatment-target",
		SEND_PATIENT_NOTI: "/api/PatienNotification/send-patient-info",
	},
	PROFILE: {
		GET_PATIENT_FAMILY: "/api/PatienFamily/get-patient-family",
		GET_PATIENT_RISK_FACTOR: "/api/Patient/risk-factors",
		GET_FAMILY_INVITATION: "/api/PatienFamily/get-family-invitation",
		ACCEPT_FAMILY_INVITATION: "/api/PatienFamily/accept-family-invitation",
		REJECT_FAMILY_INVITATION: "/api/PatienFamily/reject-family-invitation",
		SEND_FAMILY_INVITATION: "/api/PatienFamily/send-family-invitation",
		CREATE_PATIENT_ZALO: "/api/Patient/create-patient-from-zalo",
		UPDATE_PATIENT_ZALO: "/api/Patient/update-patient-from-zalo",
		GET_RESOURCE_BY_TYPE: "/api/Patient/get-resources-by",
		GET_PATIENT_BY_ID: "/api/Patient/get-patient-by-id",
		DELETE_PATIENT_FAMILY: "/api/PatienFamily/delete-patient-family",
	},
	HISTORY: {
		GET_MEDICAL_RECORD_HISTORY: "/api/Patient/medical-record-his",
	},
	RISK: {
		CREATE_CLASSIFY_DANGEROUS: "/api/Patient/create-classify-dangerous",
		GET_CLASSIFY_DANGEROUS: "/api/Patient/get-classify-dangerous-record",
	},
	NOTIFICATION: {
		GET_NOTIFICATION: "/api/Patient/get-all-noti",
	},
	GET_PHONE_NUMBER: "https://graph.zalo.me/v2.0/me/info",
	RISK_DETAIL: "/api/Patient/get-medical-record",
}

export default API_ENDPOINT
