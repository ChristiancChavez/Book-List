import React, { useState, createContext, useReducer } from 'react';
//Reducer
import { bookListReducer } from './../reducers/bookReducer';

export const BookListContext = createContext();
const BookListContextProvider = (props) => {

    const [bookList, dispatch] = useReducer(bookListReducer, []);
    const [readBookList, setReadBookList] = useState([]);
    const [favoritesBookList, setFavoritesBookList] = useState([]);

    const addToReadBookList = (book, author, id) => {
        setReadBookList([...readBookList, {book:book, author:author, id:id}])
    };

    const addFavoriteBookList = (book, author, id) => {
        setFavoritesBookList([...favoritesBookList, {book:book, author:author, id:id}])
    };
    

    return (
        <BookListContext.Provider value={{bookList, dispatch, readBookList, addToReadBookList, favoritesBookList, addFavoriteBookList}}>
            {props.children}
        </BookListContext.Provider>
    );
};

export default BookListContextProvider;
