export type ThemeMode = 'light' | 'dark' | 'system';

export type ResolvedTheme = 'light' | 'dark';

export interface NavItem {
	label: string;
	path: string;
	iconName: 'home' | 'journey' | 'settings' | 'about';
}

