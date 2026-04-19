import type { ReactNode } from 'react';

type BubbleIconProps = {
	children: ReactNode;
	className?: string;
};

export function BubbleIcon({
	children,
	className = '',
}: Readonly<BubbleIconProps>): ReactNode {
	return (
		<span
			className={`bubble p-2 inline-flex items-center justify-center rounded-full ${className}`}
		>
			<span className='text-3xl' aria-hidden='true'>
				{children}
			</span>
		</span>
	);
}
