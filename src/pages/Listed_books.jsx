import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { get_stored_read_list } from '../utility/add_to_storage';
import Book from '../components/books/Book';
import { get_wish_list } from '../utility/add_to_wish_list';

const Listed_books = () => {

            const all_data = useLoaderData();

            // state for read list
            const [read_list, set_read_list] = useState([]);

            // ideally we will directly get the data from the database 
            useEffect(() => {
                        const stored_read_list = get_stored_read_list();
                        const stored_read_list_int = stored_read_list.map(id => parseInt(id));

                        // worst way 
                        // console.log(stored_read_list, all_data, stored_read_list_int)
                        const read_book_list = all_data.filter(book => stored_read_list_int.includes(book.bookId))
                        set_read_list(read_book_list)
            }, []);

            // state for wish list
            const [wish_list, set_wish_list] = useState([]);

            // get wish list item and set to the ui 
            useEffect( () => {
                        const stored_wish_list = get_wish_list();
                        const stored_wish_list_int = stored_wish_list.map( id => parseInt(id) );

                        const wish_book_list = all_data.filter( book => stored_wish_list_int.includes(book.bookId) );
                        set_wish_list(wish_book_list);
            }, [] ) 

            return (
                        <section className="w-11/12 mx-auto my-20">
                                    <h1 className="headline-font text-4xl text-center mb-10 bg-base-200 p-5 rounded-xl">Books</h1>
                                    <Tabs>
                                                <TabList>
                                                            <Tab>Read Books</Tab>
                                                            <Tab>Wishlist</Tab>
                                                </TabList>

                                                <TabPanel>
                                                            <div className="grid md:grid-cols-3 gap-10 mt-10">
                                                                        {
                                                                                    read_list.map(book =>
                                                                                                <Book
                                                                                                            key={book.bookId}
                                                                                                            book={book}
                                                                                                ></Book>
                                                                                    )
                                                                        }
                                                            </div>
                                                </TabPanel>
                                                <TabPanel>
                                                            <div className="grid md:grid-cols-3 gap-10 mt-10">
                                                                        {
                                                                                    wish_list.map( book => 
                                                                                                <Book
                                                                                                            key={book.bookId}
                                                                                                            book={book}
                                                                                                ></Book>
                                                                                     )
                                                                        }
                                                            </div>
                                                </TabPanel>
                                    </Tabs>
                        </section>
            );
};

export default Listed_books;