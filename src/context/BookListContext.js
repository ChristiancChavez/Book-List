import React, { useState, createContext, useReducer, useEffect } from 'react';
//Reducer
import { bookListReducer } from './../reducers/bookReducer';

export const BookListContext = createContext();
const BookListContextProvider = (props) => {

    const [bookList, dispatch] = useReducer(bookListReducer, [], () => {
        const localDataMyList = localStorage.getItem('BookList');
        return localDataMyList ? JSON.parse(localDataMyList) : [];
    });
    const [readBookList, setReadBookList] = useState([]);
    const [favoritesBookList, setFavoritesBookList] = useState([]);

    const addToReadBookList = (book, author, id) => {
        const localDataReadBookList = localStorage.getItem('ReadBookList');
        if (localDataReadBookList) {
            const updatedData = [...JSON.parse(localDataReadBookList), {book:book, author:author, id:id}];
            window.localStorage.setItem('ReadBookList', JSON.stringify(updatedData));
            setReadBookList(updatedData);
        } else {
            window.localStorage.setItem('ReadBookList', JSON.stringify([...readBookList, {book:book, author:author, id:id}]));
            setReadBookList([...readBookList, {book, author, id}])
        }
    };

    const addToFavoriteBookList = (book, author, id) => {
        const localDataFavoritesBookList = localStorage.getItem('FavoritesBookList');
        if (localDataFavoritesBookList) {
            const updatedData = [...JSON.parse(localDataFavoritesBookList), {book:book, author:author, id:id}];
            window.localStorage.setItem('FavoritesBookList', JSON.stringify(updatedData));
            setFavoritesBookList(updatedData);
        } else {
            window.localStorage.setItem('FavoritesBookList', JSON.stringify([...favoritesBookList, {book:book, author:author, id:id}]));
            setFavoritesBookList([...favoritesBookList, {book, author, id}])

        }
    };

    useEffect(() => {
        window.localStorage.setItem('BookList', JSON.stringify(bookList))
    }, [bookList]);

    return (
        <BookListContext.Provider value={{bookList, dispatch, readBookList, addToReadBookList, favoritesBookList, addToFavoriteBookList}}>
            {props.children}
        </BookListContext.Provider>
    );
};

export default BookListContextProvider;
