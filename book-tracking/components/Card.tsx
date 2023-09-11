'use client';
import Image from 'next/image';
import React from 'react';
import bookImage from '../assets/book.jpg';
import { BookRepository } from '@/app/types';

const BookCard = ({
	book,
	onclick,
	ondelete,
}: {
	book: BookRepository;
	onclick?: () => void;
	ondelete?: () => void;
}) => {
	return (
		<div className='flex flex-col items-start gap-5'>
			<div className='bg-red-500 w-[22rem] h-[25rem] rounded-md'>
				<Image
					src={bookImage}
					width={100}
					height={100}
					className='object-cover h-full w-full rounded-md'
					alt='Image for a book'
				/>
			</div>
			<div className='flex justify-between w-full'>
				<div>
					<p className='font-bold capitalize truncate'>{book.title}</p>
					<p className='text-sm'>By: author</p>
					<p className='text-zinc-300'>Rating: 4</p>
				</div>
				<div className='h-full flex flex-col justify-between'>
					{onclick && (
						<button
							className='bg-slate-200 rounded-md px-2 py-1'
							onClick={onclick}
						>
							Move
						</button>
					)}
					<button
						className='bg-slate-200 rounded-md px-2 py-1'
						onClick={ondelete}
					>
						Delete
					</button>
				</div>
			</div>
		</div>
	);
};

export default BookCard;
