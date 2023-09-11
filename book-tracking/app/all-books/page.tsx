'use client';
import React, { useEffect } from 'react';
import { DialogDefault } from '@/components/Dialog';
import BookCard from '@/components/Card';
import { BookRepository, headers } from '../types';

const AllBooks = () => {
	const [Books, setBooks] = React.useState<BookRepository[]>([]);
	const [open, setOpen] = React.useState(false);

	const handleOpen = () => setOpen(!open);
	useEffect(() => {
		async function getBooks(): Promise<BookRepository[]> {
			try {
				const res = await fetch('http://localhost:8000/books/', {
					method: 'GET',
					headers
				});
				const data = await res.json();
				setBooks(data);
				return data;
			} catch (error) {
				console.log(error);
			}
			return [];
		}
		getBooks();
	}, []);

	const handleButtonClick = (book_id: number) => {
		async function deleteBook() {
			const res = await fetch(`http://localhost:8000/books/${book_id}`, {
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json',
				},
				// body: JSON.stringify({ ...book, status: 'in-progress' }),
			});
			const data = await res.json();
			console.log(data);
		}
		deleteBook();
	};
	return (
		<div className='inline-grid grid-cols-3 w-full overflow-y-auto gap-x-10 gap-y-24 flex-wrap '>
			{Books.map((book) => (
				<BookCard
					key={book.id}
					book={book}
					ondelete={() => handleButtonClick(book.id)}
				/>
			))}
			<DialogDefault open={open} handler={handleOpen} />
		</div>
	);
};

export default AllBooks;
