'use client';
import Image from 'next/image';
import React from 'react';
import bookImage from '../assets/book.jpg';

const BookCard = ({ book }: { book: BookRepository }) => {
	return (
		<div className='flex flex-col items-start'>
			<div className='bg-red-500 w-[20rem] h-[25rem] rounded-md'>
				<Image
					src={bookImage}
					width={100}
					height={100}
					className='object-cover h-full w-full rounded-md'
					alt='Image for a book'
				/>
			</div>
			<p className='font-bold capitalize truncate'>{book.title}</p>
			<p className='text-sm'>By: author</p>
			<p className='text-zinc-300'>Rating: 4</p>
		</div>
	);
};

export default BookCard;
