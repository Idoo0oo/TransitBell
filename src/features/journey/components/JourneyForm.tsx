import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowUpDown, X, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useJourneyStore } from '@/stores/journeyStore';
import type { JourneyFormErrors } from '../types';

export function JourneyForm() {
	const navigate = useNavigate();
	const setActiveJourney = useJourneyStore((s) => s.setActiveJourney);

	const [origin, setOrigin] = useState('');
	const [destination, setDestination] = useState('');
	const [errors, setErrors] = useState<JourneyFormErrors>({});
	const [isSwapping, setIsSwapping] = useState(false);

	const handleSwap = () => {
		setIsSwapping(true);
		setOrigin(destination);
		setDestination(origin);
		setErrors({});
		setTimeout(() => setIsSwapping(false), 200);
	};

	const validate = (): boolean => {
		const newErrors: JourneyFormErrors = {};
		const trimmedOrigin = origin.trim();
		const trimmedDest = destination.trim();

		if (!trimmedOrigin) {
			newErrors.origin = 'Please enter a departure station.';
		}
		if (!trimmedDest) {
			newErrors.destination = 'Please enter a destination station.';
		}
		if (
			trimmedOrigin &&
			trimmedDest &&
			trimmedOrigin.toLowerCase() === trimmedDest.toLowerCase()
		) {
			newErrors.general =
				'Departure and destination stations cannot be the same.';
		}

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (!validate()) return;

		setActiveJourney(origin, destination);
		navigate('/journey');
	};

	const handleOriginChange = (val: string) => {
		setOrigin(val);
		if (errors.origin || errors.general) {
			setErrors((prev) => ({ ...prev, origin: undefined, general: undefined }));
		}
	};

	const handleDestinationChange = (val: string) => {
		setDestination(val);
		if (errors.destination || errors.general) {
			setErrors((prev) => ({
				...prev,
				destination: undefined,
				general: undefined,
			}));
		}
	};

	return (
		<Card className="border-[var(--border-subtle)] bg-[var(--bg-surface)]">
			<CardHeader className="pb-3">
				<div className="flex items-center justify-between">
					<CardTitle className="text-sm font-semibold text-[var(--text-primary)]">
						Route Selection
					</CardTitle>
					<span className="text-[10px] text-[var(--text-secondary)]">
						Free-text entry (Phase 2)
					</span>
				</div>
			</CardHeader>
			<CardContent>
				<form onSubmit={handleSubmit} className="flex flex-col gap-4">
					{/* Interactive Route Box */}
					<div className="relative flex flex-col gap-3 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface-subtle)]/30 p-3">
						{/* Origin Row */}
						<div className="flex flex-col gap-1.5">
							<div className="flex items-center justify-between">
								<label
									htmlFor="origin-station-input"
									className="flex items-center gap-2 text-xs font-medium text-[var(--text-secondary)]">
									<span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 ring-2 ring-emerald-500/20" />
									<span>From (Departure)</span>
								</label>
							</div>

							<div className="relative flex items-center">
								<input
									id="origin-station-input"
									type="text"
									value={origin}
									onChange={(e) => handleOriginChange(e.target.value)}
									placeholder="e.g. Bogor, Manggarai, Depok"
									autoComplete="off"
									aria-invalid={Boolean(errors.origin || errors.general)}
									aria-describedby={
										errors.origin ? 'origin-error' : undefined
									}
									className="flex h-11 min-h-[44px] w-full rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] px-3 pr-10 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-secondary)] transition-colors focus-visible:border-[var(--primary)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--primary)]"
								/>
								{origin && (
									<button
										type="button"
										onClick={() => handleOriginChange('')}
										aria-label="Clear departure station"
										className="absolute right-2.5 flex h-6 w-6 items-center justify-center rounded-md text-[var(--text-secondary)] hover:bg-[var(--bg-surface-subtle)] hover:text-[var(--text-primary)]">
										<X className="h-3.5 w-3.5" />
									</button>
								)}
							</div>
							{errors.origin && (
								<p
									id="origin-error"
									className="text-xs text-rose-500 flex items-center gap-1 pt-0.5">
									<AlertCircle className="h-3 w-3 shrink-0" />
									<span>{errors.origin}</span>
								</p>
							)}
						</div>

						{/* Route Connector with Swap Action */}
						<div className="relative flex items-center justify-center -my-1 py-1">
							<div className="absolute left-6 h-full w-[2px] -translate-x-1/2 border-l border-dashed border-[var(--border-subtle)]" />
							<Button
								type="button"
								variant="outline"
								size="icon"
								onClick={handleSwap}
								aria-label="Swap departure and destination stations"
								title="Swap stations"
								className="relative z-10 h-9 w-9 min-h-[36px] min-w-[36px] rounded-full border-[var(--border-subtle)] bg-[var(--bg-surface)] shadow-xs transition-transform hover:bg-[var(--bg-surface-subtle)] active:scale-90">
								<ArrowUpDown
									className={`h-3.5 w-3.5 text-[var(--text-secondary)] transition-transform duration-200 ${
										isSwapping ? 'rotate-180' : ''
									}`}
								/>
							</Button>
						</div>

						{/* Destination Row */}
						<div className="flex flex-col gap-1.5">
							<div className="flex items-center justify-between">
								<label
									htmlFor="destination-station-input"
									className="flex items-center gap-2 text-xs font-medium text-[var(--text-secondary)]">
									<span className="flex h-2.5 w-2.5 rounded-full bg-[var(--primary)] ring-2 ring-[var(--primary)]/20" />
									<span>To (Destination)</span>
								</label>
							</div>

							<div className="relative flex items-center">
								<input
									id="destination-station-input"
									type="text"
									value={destination}
									onChange={(e) => handleDestinationChange(e.target.value)}
									placeholder="e.g. Sudirman, Tanah Abang, Juanda"
									autoComplete="off"
									aria-invalid={Boolean(errors.destination || errors.general)}
									aria-describedby={
										errors.destination ? 'dest-error' : undefined
									}
									className="flex h-11 min-h-[44px] w-full rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] px-3 pr-10 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-secondary)] transition-colors focus-visible:border-[var(--primary)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--primary)]"
								/>
								{destination && (
									<button
										type="button"
										onClick={() => handleDestinationChange('')}
										aria-label="Clear destination station"
										className="absolute right-2.5 flex h-6 w-6 items-center justify-center rounded-md text-[var(--text-secondary)] hover:bg-[var(--bg-surface-subtle)] hover:text-[var(--text-primary)]">
										<X className="h-3.5 w-3.5" />
									</button>
								)}
							</div>
							{errors.destination && (
								<p
									id="dest-error"
									className="text-xs text-rose-500 flex items-center gap-1 pt-0.5">
									<AlertCircle className="h-3 w-3 shrink-0" />
									<span>{errors.destination}</span>
								</p>
							)}
						</div>
					</div>

					{/* General Error Message */}
					{errors.general && (
						<div
							role="alert"
							className="flex items-center gap-2 rounded-lg border border-rose-500/20 bg-rose-500/10 p-2.5 text-xs text-rose-600 dark:text-rose-400">
							<AlertCircle className="h-4 w-4 shrink-0" />
							<span>{errors.general}</span>
						</div>
					)}

					{/* Note on Free Text Entry */}
					<p className="text-[11px] text-[var(--text-secondary)] leading-relaxed">
						* Station inputs accept text for UI interaction testing. Official
						KRL station dataset and autocomplete search will arrive in Phase 3.
					</p>

					{/* CTA Button */}
					<Button
						type="submit"
						variant="primary"
						className="h-12 min-h-[48px] w-full text-sm font-semibold tracking-wide">
						Set Destination Alarm
					</Button>
				</form>
			</CardContent>
		</Card>
	);
}

