import type { ReactNode } from 'react';

import styles from './Project.module.css';

export type ProjectProps = {
	title: string;
	date: string;
	description: string;
	technologies: ReactNode[];
	imgName: string;
};

type BubbleIconProps = {
	children: ReactNode;
	className?: string;
};

function BubbleIcon({ children, className = '' }: BubbleIconProps): ReactNode {
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

export function Project(props: ProjectProps): ReactNode {
	return defaultProject(props);
}

const defaultProject = (props: ProjectProps): ReactNode => (
	<div className='max-w-full flex flex-col md:flex-row md:justify-center gap-4'>
		<img
			src={`/projects/${props.imgName}`}
			alt={'Sugus'}
			className='w-sm h-auto aspect-square object-cover rounded-xl bg-transparent shadow-lg'
			draggable={false}
		/>
		<div className='h-full flex flex-col gap-2'>
			<h2 className='text-4xl font-bold'>{props.title}</h2>
			<h4 className='text-lg font-semibold'>{props.date}</h4>
			<p className={'max-w-sm p-2 h-full bubble rounded-xl'}>
				{props.description}
			</p>
			<div className='flex items-center gap-4'>
				{props.technologies.map((tech: ReactNode, index: number) => {
					return (
						<BubbleIcon key={`${props.title}-tech-icon-${index}}`}>
							{tech}
						</BubbleIcon>
					);
				})}
			</div>
		</div>
	</div>
);
