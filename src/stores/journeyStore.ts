import { create } from 'zustand';
import type { ActiveJourney } from '@/features/journey/types';

interface JourneyStoreState {
	activeJourney: ActiveJourney | null;
	setActiveJourney: (origin: string, destination: string) => void;
	clearActiveJourney: () => void;
}

export const useJourneyStore = create<JourneyStoreState>((set) => ({
	activeJourney: null,
	setActiveJourney: (origin: string, destination: string) =>
		set({
			activeJourney: {
				origin: origin.trim(),
				destination: destination.trim(),
				createdAt: Date.now(),
			},
		}),
	clearActiveJourney: () => set({ activeJourney: null }),
}));

