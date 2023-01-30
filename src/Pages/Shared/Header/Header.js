import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="p-4 bg-gray-800 text-gray-100">
	<div className="container flex justify-between h-16 mx-auto">
		
		<div>
			<h3 className='text-gray-100 text-3xl font-extrabold'> Power Hack </h3>
		</div>
		<div className="items-center flex-shrink-0 hidden lg:flex">
		<Link to='/registration'>
		<button 
			className="self-center px-8 py-3 font-semibold rounded bg-violet-400 text-gray-100">
			Sign up
			</button>
		</Link>
		<Link to='/login'>
		<button 
			className="self-center px-8 py-3 font-semibold rounded bg-violet-400 text-gray-100">
			Login
			</button>
		</Link>
			
		</div>
		<button className="p-4 lg:hidden">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-100">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
			</svg>
		</button>
	</div>
</header>
    );
};

export default Header;