import Logo from 'components/Logo';
import { Link } from 'react-router-dom';
import { HiSun as SunIcon, HiMoon as MoonIcon } from 'react-icons/hi';
import Darkmode from 'components/Darkmode';

const Navbar = () => {
	const [theme, setTheme] = Darkmode();

	return (
		<>
			<nav class='bg-white dark:bg-nature-800 px-4 py-4'>
				<div class='relative flex items-center justify-between mx-auto'>
					<div class='flex items-center'>
						<Link to='/' className='flex'>
							<Logo />
						</Link>
					</div>
					<div class='flex items-center space-x-2 lg:space-x-8 lg:flex'>
						<button
							type='button'
							class='text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full text-sm p-1.5 mr-1 lg:mr-4'
							onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
						>
							{theme === 'dark' ? <SunIcon className='w-6 h-6' /> : <MoonIcon className='w-6 h-6' />}
						</button>
						<button
							type='button'
							className='text-white bg-norm-blue hover:bg-norm-dblue text-base leading-6 font-dm-sans font-medium transition duration-150 ease-in-out rounded-3xl px-3 py-2 lg:px-6  lg:py-2 mr-3 md:mr-0'
						>
							Connect a Wallet
						</button>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
