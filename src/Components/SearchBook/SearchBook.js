import React, { useState, useContext } from 'react';
//Context
import { BookListContext } from '../../context/BookListContext';
//Dependencies
const { v4: uuid_v4 } = require('uuid');

const SearchBook = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState(''); 
    const { bookList, setBookList } = useContext(BookListContext);

    const updateBookList = (e) => {
        e.preventDefault();
        setBookList([
            ...bookList,
            {book: title, author: author, id: uuid_v4()}
        ]);
        setTitle('');
        setAuthor('');
        console.log(bookList, 'boookkkklissstttt');
    }

    return (
        <>
        <form onSubmit={updateBookList}>
            <input required name="title" type="text" value={title} placeholder="Title Book" onChange={(e) => setTitle(e.target.value)}/>
            <input required name="author" type="text" value={author} placeholder="Author Book" onChange={(e) => setAuthor(e.target.value)}/>
            <button type="submit" >+</button>
        </form>
        <h1>{bookList.length}</h1>
        </>
    )
};

export default SearchBook;