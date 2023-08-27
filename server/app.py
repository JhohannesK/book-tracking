from fastapi import FastAPI, HTTPException
from repositories import BookRepository, Book
from repositories import Book

app = FastAPI()
book_repo = BookRepository()

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
