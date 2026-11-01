import { Bell, Moon, Sun, Monitor } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';
import type { ThemeMode } from '@/types';

export function Header() {
	const { theme, resolvedTheme, setTheme } = useTheme();

	const cycleTheme = () => {
		const order: ThemeMode[] = ['light', 'dark', 'system'];
		const nextIndex = (order.indexOf(theme) + 1) % order.length;
		setTheme(order[nextIndex]);
	};

	return (
		<header className="sticky top-0 z-40 flex h-14 w-full items-center justify-between border-b border-[var(--border-subtle)] bg-[var(--bg-page)]/80 px-4 sm:px-6 backdrop-blur-md">
			<div className="flex items-center gap-2.5">
				<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--primary)] text-[var(--primary-foreground)] shadow-xs">
					<Bell className="h-4.5 w-4.5" />
				</div>
				<div className="flex flex-col">
					<span className="text-sm font-bold tracking-tight text-[var(--text-primary)]">
						TransitBell
					</span>
					<span className="text-[10px] text-[var(--text-secondary)]">
						Never Miss Your Stop
					</span>
				</div>
			</div>

			<button
				type="button"
				onClick={cycleTheme}
				aria-label={`Current theme: ${theme}. Click to switch theme.`}
				title={`Theme: ${theme}`}
				className="flex h-11 w-11 min-h-[44px] min-w-[44px] items-center justify-center rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--text-secondary)] transition-colors hover:bg-[var(--bg-surface-subtle)] hover:text-[var(--text-primary)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--primary)] active:scale-95">
				{theme === 'system' ? (
					<Monitor className="h-4.5 w-4.5" />
				) : resolvedTheme === 'dark' ? (
					<Moon className="h-4.5 w-4.5" />
				) : (
					<Sun className="h-4.5 w-4.5" />
				)}
			</button>
		</header>
	);
}
