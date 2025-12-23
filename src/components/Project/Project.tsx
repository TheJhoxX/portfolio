type ProjectProps = {
	imgPath: string;
	focused: boolean;
	index: number;
	handleClick: (index: number) => void;
};

function Project(props: ProjectProps) {
	const imageUrl = new URL(
		`../assets/projects/${props.imgPath}`,
		import.meta.url
	).href;

	return (
		<button
			type='button'
			onClick={() => props.handleClick(props.index)}
			style={{
				backgroundImage: `
          radial-gradient(circle at center, rgba(115,115,115,0.65) 50%, rgba(250,250,250,0.95) 100%),
          url("${imageUrl}")
        `,
				backgroundPosition: 'center',
				backgroundSize: 'cover',
				backgroundRepeat: 'no-repeat',
			}}
			className={[
				'transition-all duration-300 ease-in hover:cursor-pointer',
				'inset-shadow-sm inset-shadow-white shadow-lg hover:inset-shadow-cyan-500/60',
				props.focused
					? 'fixed inset-0 z-50 w-screen h-screen rounded-none'
					: 'w-full aspect-3/2 rounded-3xl',
			].join(' ')}
		/>
	);
}
export default Project;
