from fastapi.testclient import TestClient
from app import app
from unittest.mock import Mock
from repositories import BookRepository

client = TestClient(app)

get_all = BookRepository.get_all
to_read = BookRepository.books_to_read

def test_get_books():
    app.dependency_overrides[get_all] = Mock(return_value = [
        {"id": 1, "title": "The Hobbit", "status": "to-read"},
        {"id": 2, "title": "The Fellowship of the Ring", "status": "in-progress"}
    ])
    response = client.get(
        "/books/",
    )
    assert response.status_code == 200
    data = response.json()
    assert isinstance(data, list)

def test_get_to_read_books():
    app.dependency_overrides[to_read] = Mock(return_value = [
         {"id": 1, "title": "The Hobbit", "status": "to-read"},
        {"id": 2, "title": "The Fellowship of the Ring", "status": "to-read"}
    ])
    response = client.get(
        "/books/to-read",
    )
    assert response.status_code == 200
    data = response.json()
    assert isinstance(data, list)