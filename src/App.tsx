import { Sample } from 'components';

const App = () => {
	return (
		<div className='App gap-2 text-white'>
			<div className='items-start'>
				<p>This is a basic app with the following preinstalled packages:</p>
				<ul className='mt-5'>
					<li>Eslint</li>
					<li>Prettier</li>
					<li>eslint-config-prettier</li>
					<li>tailwindcss</li>
					<li>postcss</li>
					<li>autoprefixer</li>
				</ul>
			</div>
			<p>And one sample component</p>
			<Sample />
		</div>
	);
};

export default App;
