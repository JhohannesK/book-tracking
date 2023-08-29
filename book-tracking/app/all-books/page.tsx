'use client';
import BookCard from '@/components/Card';
import React, { useEffect } from 'react';

const AllBooks = () => {
	const [Books, setBooks] = React.useState<BookRepository[]>([]);
	useEffect(() => {
		async function getBooks(): Promise<BookRepository[]> {
			const res = await fetch('http://localhost:8000/books/');
			const data = await res.json();
			setBooks(data);
			return data;
		}
		getBooks();
	}, []);

	return (
		<div className='inline-grid grid-cols-3 w-full overflow-y-auto gap-x-10 gap-y-24 flex-wrap '>
			{Books.map((book) => (
				<BookCard key={book.id} book={book} />
			))}
		</div>
	);
};

export default AllBooks;
