/// <reference types="react-scripts" />

declare namespace NodeJS {
	interface ProcessEnv {
		readonly REACT_APP_MAPS_JAVASCRIPT_APIKEY: string
		readonly REACT_APP_FIREBASE_API_KEY: string
		readonly REACT_APP_FIREBASE_AUTH_DOMAIN: string
		readonly REACT_APP_FIREBASE_SENDER_ID: string
		readonly REACT_APP_FIREBASE_STORAGE_BUCKET: string
		readonly REACT_APP_FIREBASE_PROJECT_ID: string
		readonly REACT_APP_FIREBASE_APP_ID: string
		readonly REACT_APP_FIREBASE_MEASURMENT_ID: string
	}
}
