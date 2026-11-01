import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

export const buttonVariants = cva(
	'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 select-none active:scale-[0.98]',
	{
		variants: {
			variant: {
				primary:
					'bg-[var(--primary)] text-[var(--primary-foreground)] font-semibold hover:bg-[var(--primary-hover)] shadow-sm',
				secondary:
					'bg-[var(--bg-surface-subtle)] text-[var(--text-primary)] hover:opacity-90 border border-[var(--border-subtle)]',
				outline:
					'border border-[var(--border-subtle)] bg-transparent hover:bg-[var(--bg-surface-subtle)] text-[var(--text-primary)]',
				ghost:
					'hover:bg-[var(--bg-surface-subtle)] text-[var(--text-primary)]',
				destructive:
					'bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20 hover:bg-rose-500/20',
			},
			size: {
				default: 'h-11 px-4 py-2 min-h-[44px]',
				sm: 'h-9 px-3 text-xs min-h-[36px]',
				lg: 'h-13 px-6 text-base min-h-[52px]',
				icon: 'h-11 w-11 min-h-[44px] min-w-[44px]',
			},
		},
		defaultVariants: {
			variant: 'primary',
			size: 'default',
		},
	},
);

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, size, type = 'button', ...props }, ref) => {
		return (
			<button
				ref={ref}
				type={type}
				className={cn(buttonVariants({ variant, size, className }))}
				{...props}
			/>
		);
	},
);

Button.displayName = 'Button';

