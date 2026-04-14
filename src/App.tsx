import './App.css';
import { SiNestjs, SiNextdotjs, SiThreedotjs, SiTypeorm } from 'react-icons/si';
import { RiTailwindCssFill } from 'react-icons/ri';
import { Project } from './components/Project/Project';
import { FaFlutter, FaLinkedinIn, FaNodeJs, FaReact } from 'react-icons/fa6';
import { BiLogoTypescript } from 'react-icons/bi';
import { useEffect, useState, type ReactNode } from 'react';
import { applyTheme, getTheme, type Theme } from './theme';
import { ExperienceNode } from './components/ExperienceNode/ExperienceNode';
import { IoIosMail, IoLogoGithub } from 'react-icons/io';
import { AboutCell } from './components/AboutCell/AboutCell';

function App() {
	const [theme, setTheme] = useState<Theme>(() => getTheme());
	useEffect(() => {
		applyTheme(theme);
	}, [theme]);

	return (
		<div className='bg-pattern min-h-screen w-full overflow-x-hidden p-8 pb-16'>
			<header className='z-10 w-2/3'></header>
			<main className='h-full flex items-start justify-center'>
				<div className='w-full md:w-2/3 flex flex-col items-center gap-14 pb-20 '>
					<div>
						<h1 className='text-8xl text-center md:text-9xl font-bold mb-14'>
							Víctor Jorge Sibaja
						</h1>
						<div className='w-full flex items-center justify-center mb-4'>
							<div className='bubble rounded-xl px-2 py-1'>
								<span className='pr-4'>Front end developer</span>{' '}
								<span className='py-4'>Software Engineer</span>
							</div>
						</div>
						<div className='flex items-center justify-center gap-4'>
							<a
								target='_blank'
								rel='noopener noreferrer'
								href='https://www.linkedin.com/in/v%C3%ADctor-jorge-sibaja-156899196/'
								className='bubble p-2 rounded-full cursor-pointer'
							>
								<FaLinkedinIn className='text-black dark:text-white' />
							</a>
							<a
								href='https://github.com/TheJhoxX'
								target='_blank'
								rel='noopener noreferrer'
								className='bubble p-2 rounded-full cursor-pointer'
							>
								<IoLogoGithub className='text-black dark:text-white' />
							</a>
							<a
								href='mailto:victorjorgesibaja@gmail.com'
								target='_blank'
								rel='noopener noreferrer'
								className='bubble p-2 rounded-full cursor-pointer'
							>
								<IoIosMail className='text-black dark:text-white' />
							</a>
						</div>
					</div>
					{renderProjects()}
					{renderAboutMe()}
					{renderExperience()}
				</div>
			</main>
			<footer className='z-10 w-full'></footer>
		</div>
	);
}

const renderProjects = (): ReactNode => {
	return (
		<>
			<h2 className='text-6xl md:text-7xl font-bold ' id='projects'>
				Projects
			</h2>
			<Project
				date='2025'
				title='GymPrep'
				description="Final project for the Computer Science Bachelor's degree"
				imgName='gymprep.webp'
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
				technologies={[<SiNextdotjs />, <RiTailwindCssFill />, <FaNodeJs />]}
			/>
		</>
	);
};

const renderAboutMe = (): ReactNode => {
	return (
		<div className='flex w-full flex-col items-center md:items-start md:flex-row md:justify-center gap-4'>
			<div className='h-full flex flex-col justify-start gap-4'>
				<h2 className='text-6xl md:text-7xl font-bold'>About me</h2>
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
							src='/bcg-logo.svg'
							alt='BCG'
							className='h-8 w-auto bg-[#00532f] rounded-sm p-0.5'
							loading='lazy'
						/>
					}
					text='Currently at BCG'
				/>
				<AboutCell type='image' imgSrc='personal-photo.jpg' />
			</div>
		</div>
	);
};

const renderExperience = (): ReactNode => {
	return (
		<>
			<h2 className='text-6xl md:text-7xl font-bold' id='experience'>
				Experience
			</h2>
			<div className='bubble w-full flex flex-col items-start gap-4 rounded-xl text-base p-4'>
				<ExperienceNode
					company='Boston Consulting Group (BCG)'
					imgSrc='/bcg-logo.svg'
					companyColor={'#00532F'}
					experiences={[
						{
							position: 'Product Delivery Intern - X Delivery',
							startDate: 'Feb 2026',
							description:
								'Development of new features and maintenance of projects for the Gas & Oil sector',
						},
					]}
				/>
				<ExperienceNode
					company='GMV'
					experiences={[
						{
							startDate: 'Sept 2025',
							endDate: 'Feb 2026',
							position: 'Front-end Developer - Product Department',
							description:
								'Development of new features, refactoring, and bug fixing for the Product department in the ABT team.',
						},
						{
							position:
								'Software Developer - Customer Service & Maintenance Department',
							startDate: 'Aug 2024',
							endDate: 'Sept 2025',
							description:
								'Development of maintenance software and new functionalities for customer service in the Intelligent Transportation Systems sector',
						},
						{
							position:
								'Software Engineer Intern - Customer Service & Maintenance Department',
							startDate: 'Aug 2024',
							endDate: 'Sept 2025',
							description:
								'Development of maintenance software and new functionalities for customer service in the Intelligent Transportation Systems sector',
						},
					]}
					imgSrc='/gmv-background.jpg'
					companyColor={'#E00024'}
				/>
			</div>
		</>
	);
};

export default App;
