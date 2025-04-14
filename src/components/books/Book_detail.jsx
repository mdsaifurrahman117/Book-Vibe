import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { add_to_stored_read_list } from '../../utility/add_to_storage';
import { add_to_wish_list } from '../../utility/add_to_wish_list';

const Book_detail = () => {

            // get book id
            const { bookId } = useParams();
            // convert string id to number id
            const id = parseInt(bookId)

            // get book details 
            const data = useLoaderData();

            // finding data 
            const book = data.find(book => book.bookId === id)

            // destructuring book data
            const { bookName, author, image, rating, category, tags, review, totalPages, publisher, yearOfPublishing } = book;

            // adding to the read list
            const handle_add_to_storage = ( id ) => {
                        add_to_stored_read_list( id );
            }

            // adding to the wish list
            const handle_add_to_wist_list = ( id ) => {
                        add_to_wish_list( id );
            }

            return (
                        <section className="w-11/12 mx-auto my-20">
                                    <div className="min-h-screen">
                                                <div className="flex flex-col md:flex-row gap-20">
                                                            <figure className="bg-base-200 p-10 md:p-20 rounded-xl">
                                                                        <img
                                                                                    src={image}
                                                                                    className="w-80 mx-auto md:max-w-sm rounded-xl shadow"
                                                                        />
                                                            </figure>
                                                            <div className="space-y-2">
                                                                        <h1 className="text-5xl font-bold headline-font">{bookName}</h1>
                                                                        <h2 className="desc-font py-2">By : {author}</h2>
                                                                        <h3 className="desc-font border-t border-gray-300 py-2 mb-0">{category}</h3>
                                                                        <div className="border-y border-gray-300 py-6 ">
                                                                                    <p className="desc-font">
                                                                                                <span className="font-semibold">Review :</span> {review}
                                                                                    </p>
                                                                                    <p className="flex flex-row gap-5 space-y-2 desc-font pt-6">
                                                                                                <span className="font-semibold">Tag : </span>
                                                                                                {
                                                                                                            tags.map((tag, idx) =>
                                                                                                                        <span
                                                                                                                                    key={idx}
                                                                                                                                    className="badge badge-soft badge-success"
                                                                                                                        >{tag}</span>
                                                                                                            )
                                                                                                }
                                                                                    </p>
                                                                        </div>
                                                                        <div className="space-y-2">
                                                                                    <h3 className="desc-font">Number of Pages : <span className="font-semibold">{totalPages}</span></h3>
                                                                                    <h3 className="desc-font">Publisher : <span className="font-semibold">{publisher}</span></h3>
                                                                                    <h3 className="desc-font">Year of Publishing : <span className="font-semibold">{yearOfPublishing}</span></h3>
                                                                                    <h3 className="desc-font">Rating : <span className="font-semibold">{rating}</span></h3>
                                                                        </div>
                                                                        <div className="flex flex-row gap-5">
                                                                                    <button
                                                                                                className={"btn desc-font"}
                                                                                                onClick={ () => handle_add_to_storage(bookId) }
                                                                                    >Mark as Read </button>
                                                                                    <button
                                                                                                className={"btn bg-blue-400 text-white desc-font"}
                                                                                                onClick={ () => handle_add_to_wist_list(bookId) }
                                                                                    >Wishlist</button>
                                                                        </div>
                                                            </div>
                                                </div>
                                    </div>
                        </section>
            );
};

export default Book_detail;