import { useState } from 'react';
import './App.css';
import Project from './components/Project/Project';

function App() {
	const [focusedProject, setFocusedProject] = useState<number | null>(null);

	const handleProjectClick = (index: number) => {
		setFocusedProject(index);
	};

	return (
		<div className='bg-white h-screen w-screen overflow-x-hidden p-4 grid grid-rows-[auto_1fr_auto]'>
			<header className='w-full'></header>
			<main className='w-full h-full grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center items-start content-start'>
				<Project
					index={0}
					handleClick={handleProjectClick}
					imgPath='sugus-image.png'
					focused={focusedProject === 0}
				/>
				<Project
					index={1}
					handleClick={handleProjectClick}
					imgPath='todo-app-image.png'
					focused={focusedProject === 1}
				/>
				<Project
					index={2}
					handleClick={handleProjectClick}
					imgPath='bash.webp'
					focused={focusedProject === 2}
				/>
				<Project
					index={3}
					handleClick={handleProjectClick}
					imgPath='hanoi-towers.webp'
					focused={focusedProject === 3}
				/>
				<Project
					index={4}
					handleClick={handleProjectClick}
					imgPath='nested-logo.png'
					focused={focusedProject === 4}
				/>
			</main>
			<footer className='w-full'></footer>
		</div>
	);
}

export default App;
