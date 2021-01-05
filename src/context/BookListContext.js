import React, { useState, createContext } from 'react';
//Dependencies
const { v4: uuid_v4 } = require('uuid');

export const BookListContext = createContext();
const BookListContextProvider = (props) => {

    const [bookList, setBookList] = useState([]);
    const [readBookList, setReadBookList] = useState([]);
    const [favoritesBookList, setFavoritesBookList] = useState([]);

    const addBook = (title, author) => {
        setBookList([
            ...bookList,
            {book: title, author: author, id: uuid_v4()}
        ]);
    };

    const removeBook = (id) => {
        setBookList(bookList.filter(book => book.id !== id))
    };
    

    return (
        <BookListContext.Provider value={{bookList, addBook, removeBook, readBookList, setReadBookList, favoritesBookList, setFavoritesBookList}}>
            {props.children}
        </BookListContext.Provider>
    );
};

export default BookListContextProvider;
