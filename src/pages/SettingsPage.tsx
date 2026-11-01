import { Sun, Moon, Monitor, Volume2, Vibrate, Eye } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import type { ThemeMode } from '@/types';

export function SettingsPage() {
	const { theme, setTheme } = useTheme();

	const themeOptions: { mode: ThemeMode; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
		{ mode: 'light', label: 'Light', icon: Sun },
		{ mode: 'dark', label: 'Dark', icon: Moon },
		{ mode: 'system', label: 'System', icon: Monitor },
	];

	return (
		<div className="flex flex-col gap-5">
			<section className="flex flex-col gap-1 pt-1">
				<h1 className="text-xl font-bold tracking-tight text-[var(--text-primary)]">
					Settings
				</h1>
				<p className="text-xs text-[var(--text-secondary)]">
					Customize application appearance and alarm preferences.
				</p>
			</section>

			{/* Appearance / Theme */}
			<Card className="border-[var(--border-subtle)] bg-[var(--bg-surface)]">
				<CardHeader className="pb-3">
					<CardTitle className="text-sm font-semibold text-[var(--text-primary)]">
						Appearance
					</CardTitle>
					<CardDescription>
						Choose between light, dark, or automatic system theme.
					</CardDescription>
				</CardHeader>
				<CardContent>
					<div className="grid grid-cols-3 gap-2 rounded-xl bg-[var(--bg-surface-subtle)] p-1">
						{themeOptions.map((opt) => {
							const Icon = opt.icon;
							const isSelected = theme === opt.mode;
							return (
								<button
									key={opt.mode}
									type="button"
									onClick={() => setTheme(opt.mode)}
									className={cn(
										'flex min-h-[44px] flex-col items-center justify-center gap-1.5 rounded-lg py-2 text-xs font-medium transition-all select-none',
										isSelected
											? 'bg-[var(--bg-surface)] text-[var(--text-primary)] shadow-xs font-semibold'
											: 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]',
									)}>
									<Icon className="h-4 w-4" />
									<span>{opt.label}</span>
								</button>
							);
						})}
					</div>
				</CardContent>
			</Card>

			{/* Alarm Preferences Preview */}
			<Card className="border-[var(--border-subtle)] bg-[var(--bg-surface)]">
				<CardHeader className="pb-3">
					<div className="flex items-center justify-between">
						<CardTitle className="text-sm font-semibold text-[var(--text-primary)]">
							Alarm Features
						</CardTitle>
						<Badge variant="outline">Next Phase</Badge>
					</div>
					<CardDescription>
						Device alert capabilities to be configured during journey setup.
					</CardDescription>
				</CardHeader>
				<CardContent className="flex flex-col gap-3 divide-y divide-[var(--border-subtle)]">
					<div className="flex items-center justify-between pt-1">
						<div className="flex items-center gap-2.5">
							<Volume2 className="h-4 w-4 text-[var(--text-secondary)]" />
							<div className="flex flex-col">
								<span className="text-xs font-medium text-[var(--text-primary)]">
									Audio Tone
								</span>
								<span className="text-[10px] text-[var(--text-secondary)]">
									High-clarity alert chime
								</span>
							</div>
						</div>
						<span className="text-xs text-[var(--text-secondary)]">Ready</span>
					</div>

					<div className="flex items-center justify-between pt-3">
						<div className="flex items-center gap-2.5">
							<Vibrate className="h-4 w-4 text-[var(--text-secondary)]" />
							<div className="flex flex-col">
								<span className="text-xs font-medium text-[var(--text-primary)]">
									Vibration
								</span>
								<span className="text-[10px] text-[var(--text-secondary)]">
									Supported mobile browsers
								</span>
							</div>
						</div>
						<span className="text-xs text-[var(--text-secondary)]">Ready</span>
					</div>

					<div className="flex items-center justify-between pt-3">
						<div className="flex items-center gap-2.5">
							<Eye className="h-4 w-4 text-[var(--text-secondary)]" />
							<div className="flex flex-col">
								<span className="text-xs font-medium text-[var(--text-primary)]">
									Screen Wake Lock
								</span>
								<span className="text-[10px] text-[var(--text-secondary)]">
									Keep display active while commuting
								</span>
							</div>
						</div>
						<span className="text-xs text-[var(--text-secondary)]">Ready</span>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}

