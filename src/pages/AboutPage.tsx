import { Bell, Heart, ExternalLink, ShieldCheck, Cpu } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export function AboutPage() {
	return (
		<div className="flex flex-col gap-5">
			<section className="flex flex-col gap-1 pt-1">
				<h1 className="text-xl font-bold tracking-tight text-[var(--text-primary)]">
					About TransitBell
				</h1>
				<p className="text-xs text-[var(--text-secondary)]">
					Free destination reminder for public transit passengers.
				</p>
			</section>

			{/* Brand Card */}
			<Card className="border-[var(--border-subtle)] bg-[var(--bg-surface)]">
				<CardContent className="flex flex-col items-center p-6 text-center">
					<div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--primary)] text-[var(--primary-foreground)] shadow-xs">
						<Bell className="h-7 w-7" />
					</div>
					<h2 className="mt-3 text-lg font-bold text-[var(--text-primary)]">
						TransitBell
					</h2>
					<p className="text-xs text-[var(--primary)] font-semibold mt-0.5">
						&ldquo;Never Miss Your Stop.&rdquo;
					</p>
					<Badge variant="outline" className="mt-3">
						Version 0.1.0-alpha
					</Badge>
				</CardContent>
			</Card>

			{/* Mission & Privacy */}
			<Card className="border-[var(--border-subtle)] bg-[var(--bg-surface)]">
				<CardHeader className="pb-2">
					<CardTitle className="text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)]">
						Philosophy & Privacy
					</CardTitle>
				</CardHeader>
				<CardContent className="flex flex-col gap-3 text-xs text-[var(--text-secondary)] leading-relaxed">
					<div className="flex items-start gap-2.5">
						<ShieldCheck className="h-4 w-4 shrink-0 text-emerald-500 mt-0.5" />
						<div>
							<strong className="text-[var(--text-primary)]">100% Client-Side: </strong>
							GPS coordinates are calculated in your browser memory and never uploaded to any cloud server.
						</div>
					</div>
					<div className="flex items-start gap-2.5">
						<Cpu className="h-4 w-4 shrink-0 text-[var(--primary)] mt-0.5" />
						<div>
							<strong className="text-[var(--text-primary)]">Zero Registration: </strong>
							No sign-ups, no tracking cookies, and no personal profile required.
						</div>
					</div>
				</CardContent>
			</Card>

			{/* Voluntary Support / Saweria */}
			<Card className="border-[var(--border-subtle)] bg-[var(--bg-surface)]">
				<CardHeader className="pb-2">
					<CardTitle className="text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)]">
						Support the Project
					</CardTitle>
				</CardHeader>
				<CardContent className="flex flex-col gap-3">
					<p className="text-xs text-[var(--text-secondary)] leading-relaxed">
						TransitBell is free and open utility software built for commuters.
						If this app helps you on your daily commute, you can support development via Saweria.
					</p>
					<a
						href="https://saweria.co"
						target="_blank"
						rel="noopener noreferrer"
						className="w-full">
						<Button
							variant="outline"
							className="w-full gap-2 border-[var(--border-subtle)] text-xs">
							<Heart className="h-3.5 w-3.5 text-rose-500 fill-rose-500" />
							<span>Support via Saweria</span>
							<ExternalLink className="h-3.5 w-3.5 ml-auto text-[var(--text-secondary)]" />
						</Button>
					</a>
				</CardContent>
			</Card>
		</div>
	);
}

