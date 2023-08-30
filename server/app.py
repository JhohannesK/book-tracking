from fastapi import FastAPI, HTTPException
from repositories import BookRepository, Book
from repositories import Book
from fastapi.middleware.cors import CORSMiddleware

origin = [
    'http://localhost:3000',
]

app = FastAPI()
book_repo = BookRepository()

app.add_middleware(
    CORSMiddleware,
    allow_origins=origin,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/books/")
def create_book(book_data: Book):
    book_id = book_repo.create(book_data.title, book_data.status)
    return {"id": book_id, "title": book_data.title, "status": book_data.status}

@app.get("/books/")
def get_books():
    books = book_repo.get_all()
    return books

@app.delete("/books/{book_id}")
def delete_book(book_id: int):
    book = book_repo.get(book_id)
    if not book:
        raise HTTPException(status_code=404, detail="Book not found")
    book_repo.delete(book_id)
    return {"message": "Book deleted"}

@app.put("/books/")
def update_book(book_data: Book):
    book = book_repo.get(book_data.id)
    if not book:
        raise HTTPException(status_code=404, detail="Book not found")
    book_repo.update(book_data)
    return {"message": "Book updated"}

@app.get('/books/to-read')
def get_books_to_read():
    books = book_repo.books_to_read()
    return books

@app.get('/books/in-progress')
def get_books_in_progress():
    books = book_repo.books_in_progress()
    return books

@app.get("/books/completed")
def get_books_completed():
    books = book_repo.books_completed()
    return books