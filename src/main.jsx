import { createBrowserRouter, RouterProvider } from "react-router";
import "./index.css"
import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import Root from './layout/Root';
import App from "./App"
import Error_page from './pages/Error_page';
import Listed_books from './pages/Listed_books';
import Reading_meter from "./pages/Reading_meter";
import Book_detail from "./components/books/Book_detail";
import { ToastContainer } from 'react-toastify';

const router = createBrowserRouter([
            {
                        path: "/Book-Vibe",
                        element: <Root/>,
                        errorElement: <Error_page/>,
                        children: [
                                    {
                                                path: "/Book-Vibe",
                                                element: <App/>
                                    },
                                    {
                                                path: "book-details/:bookId",
                                                element: <Book_detail/>,
                                                // worst way to load data
                                                loader: () => fetch("booksData.json") //do not load all the data for one item
                                    },
                                    {
                                                path: "listed-books",
                                                element: <Listed_books/>,
                                                // worst way to load data
                                                loader: () => fetch("booksData.json") // do not  load all the data of one item
                                    },
                                    {
                                              path: "reading-meter",
                                              element: <Reading_meter/>  
                                    }
                        ]
            },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
            <StrictMode>
                        <RouterProvider router={router} />,
                        <ToastContainer />
            </StrictMode>
);
