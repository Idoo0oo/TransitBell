import { ShieldCheck, Sparkles } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { JourneyForm, RecentJourneys } from '@/features/journey';

export function HomePage() {
	return (
		<div className="flex flex-col gap-5">
			{/* Hero Section */}
			<section className="flex flex-col gap-2 pt-1">
				<div className="flex items-center gap-2">
					<Badge variant="primary" className="gap-1 font-semibold">
						<Sparkles className="h-3 w-3" />
						<span>KRL Commuter Line</span>
					</Badge>
					<span className="text-xs text-[var(--text-secondary)]">
						Jabodetabek
					</span>
				</div>
				<h1 className="text-2xl font-bold tracking-tight text-[var(--text-primary)] sm:text-3xl">
					Never Miss Your Stop.
				</h1>
				<p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
					Set your destination alarm and relax, read, or nap during your commute.
					We&apos;ll notify you before your train arrives.
				</p>
			</section>

			{/* Core Journey Form */}
			<JourneyForm />

			{/* Privacy Reassurance */}
			<div className="flex items-center justify-center gap-2 px-2 text-center text-xs text-[var(--text-secondary)]">
				<ShieldCheck className="h-4 w-4 shrink-0 text-emerald-500" />
				<span>Your journey preferences stay on this device.</span>
			</div>

			{/* Recent Journeys History Structure */}
			<RecentJourneys />

			{/* How it Works Information */}
			<Card className="border-[var(--border-subtle)] bg-[var(--bg-surface)]">
				<CardHeader className="pb-2">
					<CardTitle className="text-xs font-semibold tracking-wider uppercase text-[var(--text-secondary)]">
						How TransitBell Works
					</CardTitle>
				</CardHeader>
				<CardContent className="flex flex-col gap-3 text-xs text-[var(--text-secondary)]">
					<div className="flex items-start gap-3">
						<span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--bg-surface-subtle)] text-[10px] font-bold text-[var(--text-primary)]">
							1
						</span>
						<span>Enter your departure and arrival stations on the KRL line.</span>
					</div>
					<div className="flex items-start gap-3">
						<span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--bg-surface-subtle)] text-[10px] font-bold text-[var(--text-primary)]">
							2
						</span>
						<span>Keep the application open in your mobile browser while commuting.</span>
					</div>
					<div className="flex items-start gap-3">
						<span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--bg-surface-subtle)] text-[10px] font-bold text-[var(--text-primary)]">
							3
						</span>
						<span>Receive warning sound and vibration alerts approaching your stop.</span>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
