import { Link } from 'react-router-dom';
import { Compass } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export function NotFoundPage() {
	return (
		<div className="flex min-h-[60vh] flex-col items-center justify-center p-4 text-center">
			<Card className="w-full border-dashed border-[var(--border-subtle)] bg-[var(--bg-surface)] py-10">
				<CardContent className="flex flex-col items-center gap-3">
					<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--bg-surface-subtle)] text-[var(--text-secondary)]">
						<Compass className="h-6 w-6" />
					</div>
					<h1 className="text-lg font-bold text-[var(--text-primary)]">
						Station Not Found
					</h1>
					<p className="text-xs text-[var(--text-secondary)] max-w-xs">
						The route or page you are looking for does not exist on this line.
					</p>
					<Link to="/" className="mt-2">
						<Button variant="primary" size="sm">
							Return to Home
						</Button>
					</Link>
				</CardContent>
			</Card>
		</div>
	);
}

