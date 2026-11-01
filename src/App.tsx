import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppLayout } from '@/layouts/AppLayout';
import {
	HomePage,
	JourneyPage,
	SettingsPage,
	AboutPage,
	NotFoundPage,
} from '@/pages';
import { useThemeStore } from '@/stores/themeStore';

export default function App() {
	useEffect(() => {
		const cleanup = useThemeStore.getState().initThemeListener();
		return cleanup;
	}, []);

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<AppLayout />}>
					<Route index element={<HomePage />} />
					<Route path="journey" element={<JourneyPage />} />
					<Route path="settings" element={<SettingsPage />} />
					<Route path="about" element={<AboutPage />} />
					<Route path="*" element={<NotFoundPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
