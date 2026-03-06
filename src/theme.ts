export type Theme = 'light' | 'dark' | 'system';
const KEY = 'theme';

function systemTheme(): 'light' | 'dark' {
	return window.matchMedia('(prefers-color-scheme: dark)').matches
		? 'dark'
		: 'light';
}

export function applyTheme(theme: Theme) {
	const resolved = theme === 'system' ? systemTheme() : theme;
	document.documentElement.classList.toggle('dark', resolved === 'dark');
	localStorage.setItem(KEY, theme);
}

export function getTheme(): Theme {
	return (localStorage.getItem(KEY) as Theme) ?? 'system';
}
