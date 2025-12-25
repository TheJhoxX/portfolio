import type { JSX } from 'react';

export type BubbleButtonProps = {
	text: string;
	onClick?: () => void;
};

export function BubbleButton(props: BubbleButtonProps): JSX.Element {
	return (
		<button
			onClick={props.onClick}
			className='rounded-full 
			p-4 bubble'
		>
			<p className='text-2xl'>{props.text}</p>
		</button>
	);
}
