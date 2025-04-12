import React from 'react';

const Button = ({ name }) => {
            return (
                        <button
                                    className={name === "Sign In" ?
                                                "btn text-white desc-font bg-green-500"
                                                :
                                                "btn text-white desc-font bg-blue-400"}
                        >{name}</button>
            );
};

export default Button;