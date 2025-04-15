import React, { useEffect, useState } from 'react';
import { get_stored_read_list } from '../utility/add_to_storage';
import { useLoaderData } from 'react-router';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';

const Reading_meter = () => {

            const all_data = useLoaderData();

            const [book_list, set_book_list] = useState([])

            useEffect(() => {
                        const readed_books = get_stored_read_list();
                        const readed_books_int = readed_books.map(id => parseInt(id))

                        const book_list = all_data.filter((book) => readed_books_int.includes(book.bookId));
                        set_book_list(book_list)
            }, [all_data])

            console.log()

            const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

            const getPath = (x, y, width, height) => {
                        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
            ${x + width / 2}, ${y}
            C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
            Z`;
            };

            const TriangleBar = (props) => {
                        const { fill, x, y, width, height } = props;

                        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
            };


            return (
                        <section className="w-11/12 mx-auto my-20">
                                    <h1 className="text-4xl text-center headline-font mb-10">Completed Book </h1>
                                    <BarChart
                                                width={900}
                                                height={450}
                                                data={book_list}
                                                margin={{
                                                            top: 20,
                                                            right: 0,
                                                            left: 0,
                                                            bottom: 0,
                                                }}
                                                className="mx-auto"
                                    >
                                                <CartesianGrid strokeDasharray="3 3" />
                                                <XAxis dataKey="bookName" />
                                                <YAxis />
                                                <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                                                            {book_list.map((entry, index) => (
                                                                        <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                                                            ))}
                                                </Bar>
                                    </BarChart>
                        </section>
            );
};

export default Reading_meter;