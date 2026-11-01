import { Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function RecentJourneys() {
	return (
		<Card className="border-[var(--border-subtle)] bg-[var(--bg-surface)]">
			<CardHeader className="pb-3">
				<div className="flex items-center justify-between">
					<CardTitle className="text-sm font-semibold text-[var(--text-primary)]">
						Recent Journeys
					</CardTitle>
					<span className="text-[10px] text-[var(--text-secondary)]">History</span>
				</div>
			</CardHeader>
			<CardContent>
				<div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-[var(--border-subtle)] bg-[var(--bg-surface-subtle)]/40 px-4 py-8 text-center">
					<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--bg-surface-subtle)] text-[var(--text-secondary)] mb-2.5">
						<Clock className="h-5 w-5" />
					</div>
					<h4 className="text-xs font-semibold text-[var(--text-primary)]">
						No Recent Journeys
					</h4>
					<p className="mt-1 text-[11px] text-[var(--text-secondary)] max-w-xs leading-relaxed">
						Completed trips and frequent routes will appear here for quick one-tap
						destination alarm setup.
					</p>
				</div>
			</CardContent>
		</Card>
	);
}

