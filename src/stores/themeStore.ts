import { create } from 'zustand';
import type { ResolvedTheme, ThemeMode } from '@/types';

const STORAGE_KEY = 'transitbell-theme';

interface ThemeState {
	theme: ThemeMode;
	resolvedTheme: ResolvedTheme;
	setTheme: (theme: ThemeMode) => void;
	initThemeListener: () => () => void;
}

function getSystemTheme(): ResolvedTheme {
	if (typeof window === 'undefined') return 'dark';
	return window.matchMedia('(prefers-color-scheme: dark)').matches
		? 'dark'
		: 'light';
}

function applyThemeToDocument(resolved: ResolvedTheme): void {
	if (typeof document === 'undefined') return;
	const root = document.documentElement;
	if (resolved === 'dark') {
		root.classList.add('dark');
	} else {
		root.classList.remove('dark');
	}
}

const initialSavedTheme: ThemeMode =
	typeof window !== 'undefined'
		? ((localStorage.getItem(STORAGE_KEY) as ThemeMode) || 'system')
		: 'system';

const initialResolved: ResolvedTheme =
	initialSavedTheme === 'system' ? getSystemTheme() : initialSavedTheme;

if (typeof window !== 'undefined') {
	applyThemeToDocument(initialResolved);
}

export const useThemeStore = create<ThemeState>((set, get) => ({
	theme: initialSavedTheme,
	resolvedTheme: initialResolved,

	setTheme: (theme: ThemeMode) => {
		const resolved = theme === 'system' ? getSystemTheme() : theme;
		if (typeof window !== 'undefined') {
			localStorage.setItem(STORAGE_KEY, theme);
		}
		applyThemeToDocument(resolved);
		set({ theme, resolvedTheme: resolved });
	},

	initThemeListener: () => {
		if (typeof window === 'undefined') {
			return () => {};
		}

		const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
		const handleSystemChange = () => {
			if (get().theme === 'system') {
				const resolved = getSystemTheme();
				applyThemeToDocument(resolved);
				set({ resolvedTheme: resolved });
			}
		};

		mediaQuery.addEventListener('change', handleSystemChange);
		return () => {
			mediaQuery.removeEventListener('change', handleSystemChange);
		};
	},
}));

