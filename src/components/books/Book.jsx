import React from 'react';
import { FaRegStar } from "react-icons/fa";

const Book = ({ book }) => {

            const { bookName, author, image, rating, category, tags } = book;

            return (
                        <div className="card bg-base-100 w-11/12 mx-auto  shadow-sm">
                                    <figure className="bg-base-200 m-5 p-10 rounded-xl ">
                                                <img
                                                            src={image}
                                                            alt="book image"
                                                            className="w-11/12 h-80 object-cover rounded-xl"
                                                />
                                    </figure>
                                    <div className="card-body">
                                                <div className="card-title flex-col items-start">
                                                            <div className="flex flex-row gap-5">
                                                                        {tags.map((tag, idx) =>
                                                                                    <span 
                                                                                                key={idx}
                                                                                                className="badge badge-soft badge-success"
                                                                                    >{tag}</span>
                                                                        )}
                                                            </div>
                                                            <h2 className="headline-font text-2xl">{bookName}</h2>
                                                </div>
                                                <h2 className="text-xl desc-font">{author}</h2>
                                                <div className="card-actions justify-between border-t border-gray-300 mt-3">
                                                            <span className="mt-2 text-[1rem] desc-font">{category}</span>
                                                            <span className="mt-2 text-[1rem] desc-font flex flex-row justify-center items-center gap-2">{rating} <FaRegStar /> </span>
                                                </div>
                                    </div>
                        </div>
            );
};

export default Book;


/*

{
    "bookId": 1,
    "bookName": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "image": "https://i.ibb.co.com/khHN7Pk/9780143454212.jpg",
    "review": "'The Great Gatsby' by F. Scott Fitzgerald is a timeless masterpiece that delves into the decadence and disillusionment of the Jazz Age. Set in the Roaring Twenties, the novel unveils the enigmatic Jay Gatsby's extravagant parties, masking a pursuit of lost love. Narrated by Nick Carraway, the story explores themes of wealth, love, and the American Dream, drawing readers into a vivid portrayal of the glittering yet elusive world of the East and West Egg. Fitzgerald's prose is both poetic and haunting, weaving a compelling narrative that transcends its era. A poignant exploration of societal excess and the human condition, 'The Great Gatsby' remains a literary gem that resonates across generations.",
    "totalPages": 192,
    "rating": 4.5,
    "category": "Classic",
    "tags": [
        "Fiction",
        "Romance"
    ],
    "publisher": "Scribner",
    "yearOfPublishing": 1925
}

*/