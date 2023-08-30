'use client';
import BookCard from '@/components/Card';
import React, { useEffect } from 'react';

const ToRead = () => {
	const [Books, setBooks] = React.useState<BookRepository[]>([]);
	useEffect(() => {
		async function getBooks(): Promise<BookRepository[]> {
			const res = await fetch('http://localhost:8000/books/to-read');
			const data = await res.json();
			setBooks(data);
			return data;
		}
		getBooks();
	}, []);

	const handleButtonClick = (book: BookRepository) => {
		async function updateBook() {
			const res = await fetch(`http://localhost:8000/books/`, {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ ...book, status: 'in-progress' }),
			});
			const data = await res.json();
			console.log(data);
		}
		updateBook();
	};
	return (
		<div className='inline-grid grid-cols-3 w-full overflow-y-auto gap-x-10 gap-y-24 flex-wrap '>
			{Books.map((book) => (
				<BookCard
					key={book.id}
					book={book}
					onclick={() => handleButtonClick(book)}
				/>
			))}
		</div>
	);
};

export default ToRead;
