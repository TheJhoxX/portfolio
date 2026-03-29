import type { ReactNode } from 'react';

type Experience = {
	position: string;
	startDate: string;
	endDate?: string;
	description?: string;
};

type ExperienceNodeProps = {
	company: string;
	imgSrc?: string;
	companyColor?: string;
	experiences: Experience[];
};

export const ExperienceNode = ({
	company,
	experiences,
	imgSrc,
	companyColor,
}: ExperienceNodeProps): ReactNode => {
	const timelineColor = companyColor ?? '#9ca3af';

	const renderMarker = (index: number): ReactNode => {
		if (index === 0 && imgSrc) {
			return (
				<div className='relative flex items-center justify-center w-full bg-white'>
					<img
						src={imgSrc}
						alt={company}
						className='w-40 aspect-video object-fill rounded-xl bg-white'
					/>
				</div>
			);
		}

		return (
			<div className='relative flex items-center justify-center w-16 h-16'>
				<span
					className='block w-4 h-4 rounded-full border-4 border-white'
					style={{ backgroundColor: timelineColor }}
				/>
			</div>
		);
	};

	const renderNode = (experience: Experience, index: number): ReactNode => {
		const key = `${company}-${experience.position}-${experience.startDate}`;
		const isLast = index === experiences.length - 1;

		return (
			<div key={key} className='grid grid-cols-[160px_1fr] gap-6 items-center'>
				<div className='relative flex justify-center items-center self-stretch'>
					{index > 0 && (
						<div
							className='absolute left-1/2 top-0 bottom-1/2 -translate-x-1/2 w-0.5'
							style={{ backgroundColor: timelineColor }}
						/>
					)}

					{!isLast && (
						<div
							className='absolute left-1/2 top-1/2 bottom-0 -translate-x-1/2 w-0.5'
							style={{ backgroundColor: timelineColor }}
						/>
					)}

					{renderMarker(index)}
				</div>

				<section className='py-6'>
					<p className='font-bold text-xl'>
						{experience.position} at{' '}
						<span style={{ color: companyColor ?? 'inherit' }}>{company}</span>
					</p>

					<p className='font-semibold'>
						{experience.startDate} - {experience.endDate || 'Present'}
					</p>

					{experience.description && <p>{experience.description}</p>}
				</section>
			</div>
		);
	};

	return (
		<div className='flex flex-col'>
			{experiences.map((experience, index) => renderNode(experience, index))}
		</div>
	);
};
