import Link from 'next/link';
import React from 'react';

const Navbar = () => {
	return (
		<div className='bg-slate-100 h-12 flex items-center justify-between px-10 py-2 rounded-md mb-10'>
			<Link
				href={'/all-books'}
				className='w-[10rem] bg-slate-200 h-full flex items-center justify-center rounded-md'
			>
				All books
			</Link>
			<Link
				href={'/to-read'}
				className='w-[10rem] bg-slate-200 h-full rounded-md flex items-center justify-center '
			>
				To-read
			</Link>
			<Link
				href={'/in-progress'}
				className='w-[10rem] bg-slate-200 h-full rounded-md flex items-center justify-center '
			>
				In-progress
			</Link>
			<Link
				href={'/completed'}
				className='w-[10rem] bg-slate-200 h-full rounded-md flex items-center justify-center '
			>
				Completed
			</Link>
		</div>
	);
};

export default Navbar;
