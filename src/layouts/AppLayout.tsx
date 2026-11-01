import { Outlet } from 'react-router-dom';
import { Header } from '@/components/shared/Header';
import { BottomNav } from '@/components/shared/BottomNav';

export function AppLayout() {
	return (
		<div className="min-h-screen bg-[var(--bg-page)] text-[var(--text-primary)] flex justify-center">
			<div className="flex min-h-screen w-full max-w-[680px] flex-col border-x border-[var(--border-subtle)] bg-[var(--bg-page)] shadow-xs transition-colors">
				<Header />
				<main className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
					<Outlet />
				</main>
				<BottomNav />
			</div>
		</div>
	);
}
