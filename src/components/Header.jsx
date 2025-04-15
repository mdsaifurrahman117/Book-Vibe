import React from 'react';
import Button from './Button';
import { Link } from 'react-router';

const Header = () => {

            const links = <>
                        <Link
                                    to={"/Book-Vibe/"}
                                    className="desc-font"
                        >Home</Link>
                        <Link
                                    to={"/Book-Vibe/listed-books"}
                                    className="desc-font"
                        >Listed Books</Link>
                        <Link
                                    to={"/Book-Vibe/reading-meter"}
                                    className="desc-font"
                        >Pages to Read</Link>
            </>

            const buttons = <>
                        <Button
                                    name={"Sign In"}
                                    className={"btn bg-green-500 text-white desc-font"}
                        ></Button>
                        <Button
                                    name={"Sign Up"}
                                    className={"btn bg-blue-500 text-white desc-font"}
                        ></Button>
            </>

            return (
                        <header className="bg-base-100 shadow-sm fixed top-0 w-full z-[999]">
                                    <nav className="navbar">
                                                <div className="navbar-start">
                                                            <a className="btn btn-ghost text-xl headline-font">Book Vibe</a>
                                                </div>
                                                <div className="navbar-center hidden lg:flex">
                                                            <ul className="menu menu-horizontal px-1 desc-font gap-5">
                                                                        {links}
                                                            </ul>
                                                </div>
                                                <div className="navbar-end">
                                                            <div className="hidden md:flex flex-row gap-3">
                                                                        {buttons}
                                                            </div>
                                                            <div className="dropdown dropdown-end">
                                                                        <div tabIndex={0} role="button" className="btn rounded-full px-[10px] lg:hidden">
                                                                                    <svg
                                                                                                xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                                                                    >
                                                                                                <path
                                                                                                            strokeLinecap="round"
                                                                                                            strokeLinejoin="round"
                                                                                                            strokeWidth="2"
                                                                                                            d="M4 6h16M4 12h8m-8 6h16"
                                                                                                />
                                                                                    </svg>
                                                                        </div>
                                                                        <ul
                                                                                    tabIndex={0}
                                                                                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 
                                                                                                p-3 shadow space-y-2"
                                                                        >
                                                                                    {links}
                                                                                    {buttons}
                                                                        </ul>
                                                            </div>
                                                </div>
                                    </nav>
                        </header>
            );
};

export default Header;