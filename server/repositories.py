from dataclasses import dataclass
from db import get_connection

@dataclass
class Book:
    id: int
    title: str
    status: str = "to-read" # default value

class BookRepository:
    def create(self, title: str, status: str):
        print("coming here",title, status)
        conn = get_connection()
        cursor = conn.cursor()
        cursor.execute("INSERT INTO book (title, status) VALUES (%s, %s) RETURNING id;", (title,status))
        book_id = cursor.fetchone()[0]
        conn.commit()
        conn.close()
        return book_id

    def get_all(self):
        conn = get_connection()
        cursor = conn.cursor()
        cursor.execute("SELECT id, title, status FROM book;")
        books = [Book(id=row[0], title=row[1], status=row[2]) for row in cursor.fetchall()]
        conn.close()
        return books

    def delete(self, book_id: int):
        conn = get_connection()
        cursor = conn.cursor()
        cursor.execute("DELETE FROM book WHERE id = %s;", (book_id,))
        conn.commit()
        conn.close()

    def get(self, book_id: int):
        conn = get_connection()
        cursor = conn.cursor()
        cursor.execute("SELECT id, title, status FROM book WHERE id = %s;", (book_id,))
        row = cursor.fetchone()
        conn.close()
        if not row:
            return None
        return Book(id=row[0], title=row[1], status=row[2])