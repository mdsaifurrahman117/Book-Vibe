import React, { useEffect, useState } from 'react';
import Book from './Book';

const Books = () => {

            // state declaration for books/data
            const [books, set_books] = useState([]);

            // fetching data
            useEffect( () => {
                        fetch("booksData.json")
                                    .then(response => response.json())
                                    .then(data => set_books(data))
                        },
            [] )

            return (
                        <section className="w-11/12 mx-auto my-20">
                                    <h1
                                                className="text-4xl headline-font text-center"
                                    >Books</h1>
                                    <div className="grid md:grid-cols-3 justify-center items-center gap-10 mt-10">
                                                {
                                                            books.map(book =>
                                                                        <Book
                                                                                    key={book.bookId}
                                                                                    book={book}
                                                                        ></Book>
                                                            )
                                                }
                                    </div>
                        </section>
            );
};

export default Books;