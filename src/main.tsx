import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';

const mql = window.matchMedia('(prefers-color-scheme: dark)');

const apply = () => {
	document.documentElement.classList.toggle('dark', mql.matches);
};

apply();
mql.addEventListener('change', apply);

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<App />
	</StrictMode>
);
