import React from 'react';
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
            return (
                        <footer className="bg-base-300">
                                    <p className="w-11/12 mx-auto flex flex-row items-center justify-center p-5 desc-font gap-2"><FaRegCopyright />All right reserved by
                                                <a
                                                            className="headline-font"
                                                            href="https://github.com/mdsaifurrahman117"
                                                            target="_blank"
                                                >MD Saifur Rahman</a>
                                    </p>
                        </footer>
            );
};

export default Footer;