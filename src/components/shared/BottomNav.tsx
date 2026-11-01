import { NavLink } from 'react-router-dom';
import { Compass, Navigation, Sliders, Info } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavItemConfig {
	label: string;
	to: string;
	icon: React.ComponentType<{ className?: string }>;
}

const navItems: NavItemConfig[] = [
	{ label: 'Home', to: '/', icon: Compass },
	{ label: 'Journey', to: '/journey', icon: Navigation },
	{ label: 'Settings', to: '/settings', icon: Sliders },
	{ label: 'About', to: '/about', icon: Info },
];

export function BottomNav() {
	return (
		<nav
			aria-label="Bottom Navigation"
			className="sticky bottom-0 z-40 w-full border-t border-[var(--border-subtle)] bg-[var(--bg-page)]/90 px-3 py-1.5 backdrop-blur-md">
			<ul className="flex items-center justify-around">
				{navItems.map((item) => {
					const Icon = item.icon;
					return (
						<li key={item.to} className="flex-1">
							<NavLink
								to={item.to}
								end={item.to === '/'}
								className={({ isActive }) =>
									cn(
										'flex min-h-[48px] w-full flex-col items-center justify-center gap-1 rounded-xl px-2 py-1 transition-colors select-none',
										isActive
											? 'text-[var(--text-primary)] font-semibold'
											: 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-subtle)]',
									)
								}>
								{({ isActive }) => (
									<>
										<div className="relative flex items-center justify-center">
											<Icon
												className={cn(
													'h-5 w-5 transition-transform',
													isActive && 'scale-105',
												)}
											/>
											{isActive && (
												<span className="absolute -top-1 -right-1 h-1.5 w-1.5 rounded-full bg-[var(--primary)]" />
											)}
										</div>
										<span className="text-[11px] tracking-tight">
											{item.label}
										</span>
									</>
								)}
							</NavLink>
						</li>
					);
				})}
			</ul>
		</nav>
	);
}

