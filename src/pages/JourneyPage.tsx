import { Link, useNavigate } from 'react-router-dom';
import {
	Navigation,
	BellOff,
	MapPin,
	ArrowRight,
	AlertTriangle,
	RotateCcw,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useJourneyStore } from '@/stores/journeyStore';

export function JourneyPage() {
	const navigate = useNavigate();
	const activeJourney = useJourneyStore((s) => s.activeJourney);
	const clearActiveJourney = useJourneyStore((s) => s.clearActiveJourney);

	if (!activeJourney) {
		return (
			<div className="flex flex-col gap-5">
				<section className="flex flex-col gap-1 pt-1">
					<h1 className="text-xl font-bold tracking-tight text-[var(--text-primary)]">
						Active Journey
					</h1>
					<p className="text-xs text-[var(--text-secondary)]">
						Live route monitoring and destination alerts.
					</p>
				</section>

				{/* Empty State */}
				<Card className="flex flex-col items-center justify-center border-dashed border-[var(--border-subtle)] bg-[var(--bg-surface)] py-12 text-center">
					<CardContent className="flex flex-col items-center gap-4 px-6">
						<div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--bg-surface-subtle)] text-[var(--text-secondary)]">
							<BellOff className="h-7 w-7" />
						</div>

						<div className="flex flex-col gap-1.5 max-w-xs">
							<h2 className="text-base font-semibold text-[var(--text-primary)]">
								No Active Journey
							</h2>
							<p className="text-xs text-[var(--text-secondary)] leading-relaxed">
								You have not started a journey yet. Select your departure and
								destination stations on the home screen to enable stop monitoring.
							</p>
						</div>

						<Link to="/" className="w-full max-w-xs pt-2">
							<Button variant="primary" className="w-full gap-2">
								<Navigation className="h-4 w-4" />
								<span>Plan a Journey</span>
							</Button>
						</Link>
					</CardContent>
				</Card>

				{/* Informational Guidance */}
				<div className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface-subtle)]/50 p-4">
					<h3 className="text-xs font-semibold text-[var(--text-primary)] mb-1">
						About Journey Alarms
					</h3>
					<p className="text-xs text-[var(--text-secondary)] leading-relaxed">
						When active, your journey progress, remaining stops, and alert signals
						will appear here. All calculation runs locally on your device.
					</p>
				</div>
			</div>
		);
	}

	return (
		<div className="flex flex-col gap-5">
			<section className="flex flex-col gap-1 pt-1">
				<div className="flex items-center justify-between">
					<h1 className="text-xl font-bold tracking-tight text-[var(--text-primary)]">
						Journey Preview
					</h1>
					<Badge variant="primary">Staged</Badge>
				</div>
				<p className="text-xs text-[var(--text-secondary)]">
					Selected route from home screen.
				</p>
			</section>

			{/* Phase 2 Development Notice */}
			<div
				role="status"
				className="flex items-start gap-3 rounded-xl border border-amber-500/20 bg-amber-500/10 p-4 text-xs text-amber-700 dark:text-amber-400">
				<AlertTriangle className="h-4 w-4 shrink-0 mt-0.5" />
				<div className="flex flex-col gap-1">
					<span className="font-semibold">
						Monitoring Not Yet Active (Phase 2 Preview)
					</span>
					<span className="leading-relaxed text-[11px] opacity-90">
						Actual GPS location monitoring, station sequence calculations, and
						audio/vibration alarm triggers are not yet implemented in this phase.
					</span>
				</div>
			</div>

			{/* Selected Route Summary Card */}
			<Card className="border-[var(--border-subtle)] bg-[var(--bg-surface)]">
				<CardHeader className="pb-3">
					<CardTitle className="text-sm font-semibold text-[var(--text-primary)]">
						Route Overview
					</CardTitle>
				</CardHeader>
				<CardContent className="flex flex-col gap-4">
					<div className="flex items-center justify-between rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface-subtle)]/50 p-4">
						<div className="flex flex-col gap-1">
							<span className="text-[10px] uppercase font-semibold text-emerald-600 dark:text-emerald-400">
								Departure
							</span>
							<span className="text-sm font-bold text-[var(--text-primary)]">
								{activeJourney.origin}
							</span>
						</div>

						<ArrowRight className="h-4 w-4 text-[var(--text-secondary)] shrink-0" />

						<div className="flex flex-col gap-1 text-right">
							<span className="text-[10px] uppercase font-semibold text-[var(--primary)]">
								Destination
							</span>
							<span className="text-sm font-bold text-[var(--text-primary)]">
								{activeJourney.destination}
							</span>
						</div>
					</div>

					<div className="flex flex-col gap-2 pt-1">
						<Button
							type="button"
							variant="outline"
							onClick={() => navigate('/')}
							className="w-full gap-2 text-xs">
							<MapPin className="h-3.5 w-3.5" />
							<span>Change Route</span>
						</Button>

						<Button
							type="button"
							variant="ghost"
							onClick={clearActiveJourney}
							className="w-full gap-2 text-xs text-rose-500 hover:bg-rose-500/10 hover:text-rose-600">
							<RotateCcw className="h-3.5 w-3.5" />
							<span>Cancel Journey</span>
						</Button>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
