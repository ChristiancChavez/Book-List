import React, { useState, createContext, useReducer } from 'react';
//Reducer
import { bookListReducer } from './../reducers/bookReducer';

export const BookListContext = createContext();
const BookListContextProvider = (props) => {

    const [bookList, dispatch] = useReducer(bookListReducer, []);
    const [readBookList, setReadBookList] = useState([]);
    const [favoritesBookList, setFavoritesBookList] = useState([]);

    // const addBook = (title, author) => {
    //     setBookList([
    //         ...bookList,
    //         {book: title, author: author, id: uuid_v4()}
    //     ]);
    // };

    // const removeBook = (id) => {
    //     setBookList(bookList.filter(book => book.id !== id))
    // };
    

    return (
        <BookListContext.Provider value={{bookList, dispatch, readBookList, setReadBookList, favoritesBookList, setFavoritesBookList}}>
            {props.children}
        </BookListContext.Provider>
    );
};

export default BookListContextProvider;
