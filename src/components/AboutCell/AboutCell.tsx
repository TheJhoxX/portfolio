import type { ReactNode } from 'react';

type AboutCellProps =
	| { type?: 'default'; topContent?: ReactNode; text: string }
	| { type: 'image'; imgSrc: string };

export const AboutCell = (props: AboutCellProps): ReactNode => {
	if (props.type === 'image')
		return (
			<div
				className='about-cell-image'
				style={{ backgroundImage: `url('/${props.imgSrc}')` }}
			>
				<span className='absolute inset-0 bg-black/10' />
			</div>
		);

	return (
		<p className='about-cell bubble'>
			{props.topContent ? (
				<span className='about-cell-top'>{props.topContent}</span>
			) : null}
			<span className='about-cell-text'>{props.text}</span>
		</p>
	);
};
