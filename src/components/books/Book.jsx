import React from 'react';
import { FaRegStar } from "react-icons/fa";
import { Link } from 'react-router';

const Book = ({ book }) => {

            const { bookId, bookName, author, image, rating, category, tags } = book;

            return (
                        <Link to={`book-details/${bookId}`}>
                                    <div className="card w-[350px] md:w-96  shadow-sm rounded-xl">
                                                <figure className="bg-base-200 p-5 md:p-10 m-5 rounded-xl ">
                                                            <img
                                                                        src={image}
                                                                        className="w-[350px] h-[400px] object-cover mx-auto rounded-xl"
                                                            />
                                                </figure>
                                                <div className="card-body">
                                                            <div className="space-y-3 flex flex-col">
                                                                        <div className="flex flex-row gap-5">
                                                                                    {
                                                                                                tags.map((tag, idx) =>
                                                                                                            <span
                                                                                                                        key={idx}
                                                                                                                        className="badge badge-soft badge-success desc-font"
                                                                                                            >{tag}</span>
                                                                                                )
                                                                                    }
                                                                        </div>
                                                                        <h2 className="headline-font card-title text-2xl grow">{bookName}</h2>
                                                                        <h2 className="font-desc text-lg">By : {author}</h2>
                                                            </div>
                                                            <div className="card-actions justify-between border-t border-gray-300 py-3">
                                                                        <div className="badge badge-outline desc-font">{category}</div>
                                                                        <div className="badge badge-outline desc-font">{rating} <FaRegStar /></div>
                                                            </div>
                                                </div>
                                    </div>
                        </Link>
            );
};

export default Book;