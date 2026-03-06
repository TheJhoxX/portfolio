import './App.css';
import { SiNestjs, SiNextdotjs, SiThreedotjs, SiTypeorm } from 'react-icons/si';
import { RiTailwindCssFill } from 'react-icons/ri';
import { Project } from './components/Project/Project';
import { FaFlutter, FaNodeJs, FaReact } from 'react-icons/fa6';
import { BiLogoTypescript } from 'react-icons/bi';
import { useEffect, useState, type ReactNode } from 'react';
import { applyTheme, getTheme, type Theme } from './theme';

type AboutCellProps =
	| { type?: 'default'; topContent?: ReactNode; text: string }
	| { type: 'image'; imgSrc: string };

function App() {
	const [theme, setTheme] = useState<Theme>(() => getTheme());
	useEffect(() => {
		applyTheme(theme);
	}, [theme]);

	return (
		<div className='bg-pattern min-h-screen w-full overflow-x-hidden p-8 pb-16'>
			<header className='z-10 w-2/3'></header>
			<main className='h-full flex items-start justify-center'>
				<div className='w-full lg:w-2/3 flex flex-col items-center gap-12'>
					<h2 className='text-7xl font-bold w-full' id='projects'>
						Projects
					</h2>
					<Project
						date='2025'
						title='GymPrep'
						description="Final project for the Computer Science Bachelor's degree"
						imgName='gymprep.jpeg'
						technologies={[<FaFlutter />, <SiNestjs />, <SiTypeorm />]}
					/>
					<Project
						date='2024'
						title='SUGUSUVa website'
						description='Website for the scholar organization SUGUS from the University of Valladolid.'
						imgName='sugus.png'
						technologies={[
							<SiNextdotjs />,
							<SiThreedotjs />,
							<RiTailwindCssFill />,
						]}
					/>
					<Project
						date='2023'
						title='ToDo App'
						description='Classic ToDo application that to manage your tasks efficiently with three task types: important, default or optional.'
						imgName='todo-app.png'
						technologies={[
							<SiNextdotjs />,
							<RiTailwindCssFill />,
							<FaNodeJs />,
						]}
					/>
					{renderAboutMe()}
				</div>
			</main>
			<footer className='z-10 w-full'></footer>
		</div>
	);
}

const renderAboutMe = (): ReactNode => {
	return (
		<div className='flex w-full flex-col items-center md:items-start md:flex-row md:justify-center gap-4'>
			<div className='h-full flex flex-col justify-start gap-4'>
				<h2 className='text-7xl font-bold'>About me</h2>
				<p className='max-w-sm'>
					Over the past few years, I’ve worked on a wide range of professional
					and academic projects. I’ve used everything from modern frameworks
					like React and Tailwind CSS to lower-level languages such as C and
					C++.
				</p>

				<p className='max-w-sm'>
					These experiences helped me find what I enjoy most:{' '}
					<span className='font-bold'>Front-end Development</span> — the area
					I’m currently focused on in my day-to-day work.
				</p>
			</div>
			<div className='about-grid bubble'>
				<AboutCell topContent='💻' text='Front-end Developer' />
				<AboutCell topContent='🇪🇸' text='Based in Spain' />
				<AboutCell topContent='🎓' text='BSc Computer Science' />
				<AboutCell text='Specialized in Software Development' />
				<AboutCell
					topContent={<FaReact className='text-[#00D8FE] text-4xl' />}
					text='React'
				/>
				<AboutCell
					topContent={<BiLogoTypescript className='text-[#2D78C7] text-4xl' />}
					text='TypeScript'
				/>
				<AboutCell topContent='💬' text='Spanish / English' />
				<AboutCell
					topContent={
						<img
							src='/gmv-logo.svg'
							alt='GMV'
							className='h-8 w-auto'
							loading='lazy'
						/>
					}
					text='Currently at GMV'
				/>
				<AboutCell type='image' imgSrc='personal-photo.jpg' />
			</div>
		</div>
	);
};

function AboutCell(props: AboutCellProps): ReactNode {
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
}

export default App;
