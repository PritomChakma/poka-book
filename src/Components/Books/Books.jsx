import { useEffect, useState } from "react";
import Book from "./Book";
const Books = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("booksData.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div className="mt-10" className="mt-10">
      <h2 className="text-4xl text-center font-bold">Books</h2>
      <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto mt-5">
        {books.map((book) => (
          <Book book={book} key={book.bookId}></Book>
        ))}
      </div>
    </div>
  );
};

export default Books;
