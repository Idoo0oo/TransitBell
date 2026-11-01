import * as React from 'react';
import { cn } from '@/lib/utils';

export interface InputProps
	extends React.InputHTMLAttributes<HTMLInputElement> {
	icon?: React.ReactNode;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
	({ className, type = 'text', icon, ...props }, ref) => {
		if (icon) {
			return (
				<div className="relative flex w-full items-center">
					<div className="pointer-events-none absolute left-3 flex items-center justify-center text-[var(--text-secondary)]">
						{icon}
					</div>
					<input
						ref={ref}
						type={type}
						className={cn(
							'flex h-11 min-h-[44px] w-full rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] py-2 pr-4 pl-10 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-secondary)] transition-colors focus-visible:border-[var(--primary)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--primary)] disabled:cursor-not-allowed disabled:opacity-50',
							className,
						)}
						{...props}
					/>
				</div>
			);
		}

		return (
			<input
				ref={ref}
				type={type}
				className={cn(
					'flex h-11 min-h-[44px] w-full rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] px-4 py-2 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-secondary)] transition-colors focus-visible:border-[var(--primary)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--primary)] disabled:cursor-not-allowed disabled:opacity-50',
					className,
				)}
				{...props}
			/>
		);
	},
);

Input.displayName = 'Input';

