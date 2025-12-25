import './App.css';
import { SiNestjs, SiNextdotjs, SiThreedotjs, SiTypeorm } from 'react-icons/si';
import { RiTailwindCssFill } from 'react-icons/ri';
import { Project } from './components/Project/Project';
import { FaFlutter, FaNodeJs } from 'react-icons/fa6';

function App() {
	return (
		<div className='bg-pattern h-screen w-screen overflow-x-hidden p-8'>
			<header className='z-10 w-2/3 '></header>
			<main className='h-full flex items-start justify-center'>
				<div className='w-full lg:w-2/3 flex flex-col items-center gap-8'>
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
					<div>Container 2</div>
				</div>
			</main>
			<footer className='z-10 w-full'></footer>
		</div>
	);
}

export default App;
