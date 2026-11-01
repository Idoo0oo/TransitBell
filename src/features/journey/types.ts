export interface JourneyFormData {
	origin: string;
	destination: string;
}

export interface JourneyFormErrors {
	origin?: string;
	destination?: string;
	general?: string;
}

export interface ActiveJourney {
	origin: string;
	destination: string;
	createdAt: number;
}

