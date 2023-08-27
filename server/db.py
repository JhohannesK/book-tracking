import os
import psycopg2
from dotenv import load_dotenv

load_dotenv()

def get_connection():
    return psycopg2.connect(
        dbname="book-tracking",
        user="postgres",
        password= os.getenv("DB_PASSWORD"),
        host="localhost",
        port="5432"
    )