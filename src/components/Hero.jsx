import React from 'react';
import book from "../assets/books.jpg"
import Button from './Button';


const Hero = () => {
            return (
                        <section className="hero ">
                                    <div className="hero-content min-h-screen my-10 flex-col lg:flex-row-reverse bg-base-200 p-10 rounded-2xl">
                                                <img
                                                            src={book}
                                                            className="md:max-w-xl rounded-lg" 
                                                />
                                                <div className="space-y-10">
                                                            <h1 className="text-4xl md:text-6xl font-bold headline-font leading-12 md:leading-20 w-11/12">Books to freshen up your bookshelf</h1>
                                                            <Button 
                                                                        name={"View The List"}
                                                                        className={"btn bg-green-500 text-white desc-font"}
                                                            ></Button>
                                                </div>
                                    </div>
                        </section>
            );
};

export default Hero;