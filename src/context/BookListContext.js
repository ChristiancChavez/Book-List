import React, { useState, createContext, useReducer, useEffect } from 'react';
//Reducer
import { bookListReducer } from './../reducers/bookReducer';

export const BookListContext = createContext();
const BookListContextProvider = (props) => {

    const [bookList, dispatch] = useReducer(bookListReducer, [], () => {
        const localDataMyList = localStorage.getItem('BookList');
        return localDataMyList ? JSON.parse(localDataMyList) : [];
    });
    const [readBookList, setReadBookList] = useState(JSON.parse(localStorage.getItem('ReadBookList')) || []);
    const [favoritesBookList, setFavoritesBookList] = useState(JSON.parse(localStorage.getItem('ReadBookList')) || []);

    const addToReadBookList = (book, author, id) => {
        const verificationExistedBook = favoritesBookList.reduce((acc, books) => {
            const nameBook = Object.values(books)[0];
            acc = [...acc, nameBook ];
            return acc;
        }, []);

        const verification = verificationExistedBook.includes(book);
        const localDataReadBookList = localStorage.getItem('ReadBookList');

        if (localDataReadBookList) {
            const updatedData = [...JSON.parse(localDataReadBookList), {book:book, author:author, id:id}];
            window.localStorage.setItem('ReadBookList', JSON.stringify(updatedData));
            if(!verification) {
                setReadBookList(updatedData);
            }
        } else {
            window.localStorage.setItem('ReadBookList', JSON.stringify([...readBookList, {book:book, author:author, id:id}]));
            setReadBookList([...readBookList, {book, author, id}])
        }
    };

    const addToFavoriteBookList = (book, author, id) => {
        const verificationExistedBook = favoritesBookList.reduce((acc, books) => {
            const nameBook = Object.values(books)[0];
            acc = [...acc, nameBook ];
            return acc;
        }, []);

        const localDataFavoritesBookList = localStorage.getItem('FavoritesBookList');
        const verification = verificationExistedBook.includes(book);

        if (localDataFavoritesBookList) {
            const updatedData = [...JSON.parse(localDataFavoritesBookList), {book:book, author:author, id:id}];
            window.localStorage.setItem('FavoritesBookList', JSON.stringify(updatedData));
            if(!verification) {
                setFavoritesBookList(updatedData);
            }
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
