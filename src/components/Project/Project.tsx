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

export function BubbleIcon({
	children,
	className = '',
}: BubbleIconProps): ReactNode {
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

const defaultProject = (props: ProjectProps): ReactNode => {
	const technologies = props.technologies.map(
		(tech: ReactNode, index: number) => {
			return (
				<span
					key={`${props.title}-tech-icon-${index}}`}
					className='text-3xl flex-none text-white'
					aria-hidden='true'
				>
					{tech}
				</span>
			);
		}
	);

	return (
		<div className='w-full flex flex-col items-center justify-start md:items-start md:flex-row md:justify-center gap-4'>
			<div
				style={{
					backgroundImage: `url(/projects/${props.imgName})`,
					backgroundSize: 'cover',
					backgroundPosition: 'center',
				}}
				className='relative min-w-xs w-xs max-w-xs h-auto overflow-hidden aspect-square rounded-4xl shadow-slate-500 shadow-md inset-ring-4 inset-ring-purple-600'
			>
				<div className='w-full h-full'>
					<div className='inline-flex p-3 bg-purple-600 rounded-br-4xl items-center gap-3'>
						{technologies}
					</div>
				</div>
			</div>

			<div className='h-full flex flex-col gap-2'>
				<h2 className='text-4xl font-bold'>{props.title}</h2>
				<h4 className='text-lg font-semibold'>{props.date}</h4>
				<p className={'max-w-sm p-2 h-full bubble rounded-xl'}>
					{props.description}
				</p>
				<div className='flex items-center gap-4'></div>
			</div>
		</div>
	);
};
