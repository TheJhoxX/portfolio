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
				<div className='relative flex items-start justify-center w-full h-full'>
					<img
						src={imgSrc}
						alt={company}
						className='w-full md:w-40 lg:w-52 aspect-video object-fill rounded-xl'
						style={{ backgroundColor: companyColor ?? 'transparent' }}
					/>
				</div>
			);
		}

		return (
			<div className='relative flex justify-center items-center h-full'>
				<span
					className='block w-4 h-4 rounded-full p-2'
					style={{ backgroundColor: timelineColor }}
				/>
			</div>
		);
	};

	const renderNode = (experience: Experience, index: number): ReactNode => {
		const key = `${company}-${experience.position}-${experience.startDate}`;
		const isLast = index === experiences.length - 1;
		const singleElement = experiences.length === 1;
		const lastElementTimelineStyle = isLast ? 'bottom-1/2' : 'bottom-0';

		if (isLast) {
			console.log(
				`Last element for ${company}: applying timeline style ${lastElementTimelineStyle}`
			);
		}
		return (
			<div
				key={key}
				className='flex flex-col md:grid md:grid-cols-[10rem_1fr] lg:grid-cols-[15rem_1fr] md:gap-6'
			>
				{/* imgage at top on small devices */}
				{index === 0 && imgSrc && (
					<img
						src={imgSrc}
						alt={company}
						className='w-full aspect-video object-fill rounded-xl mb-3 md:hidden'
						style={{ backgroundColor: companyColor ?? 'transparent' }}
					/>
				)}

				{/* DESKTOP timeline*/}
				<div className='relative hidden md:flex justify-center self-stretch'>
					{!singleElement && (
						<div
							className={`absolute w-1 ${lastElementTimelineStyle} top-0 left-1/2 -translate-x-1/2`}
							style={{ backgroundColor: timelineColor }}
						/>
					)}

					<div className='relative z-10'>{renderMarker(index)}</div>
				</div>

				{/* CONTENIDO */}
				<div
					className='pl-4 md:pl-0 border-l-4 md:border-l-0'
					style={{ borderColor: companyColor ?? timelineColor }}
				>
					<p className='font-bold text-2xl'>
						{experience.position} at{' '}
						<span style={{ color: companyColor ?? 'inherit' }}>{company}</span>
					</p>

					<p className='font-semibold pb-2 text-xl md:text-base'>
						{experience.startDate} - {experience.endDate || 'Present'}
					</p>

					{experience.description && (
						<p className='pb-4'>{experience.description}</p>
					)}
				</div>
			</div>
		);
	};

	return (
		<div className='flex flex-col gap'>
			{experiences.map((experience, index) => renderNode(experience, index))}
		</div>
	);
};
