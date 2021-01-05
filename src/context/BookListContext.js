import React, { useState, createContext } from 'react';

export const BookListContext = createContext();
const BookListContextProvider = (props) => {

    const [bookList, setBookList] = useState([]);

    return (
        <BookListContext.Provider value={{bookList, setBookList}}>
            {props.children}
        </BookListContext.Provider>
    );
};

export default BookListContextProvider;