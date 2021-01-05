import React, { useState, useContext } from 'react';
//Context
import { BookListContext } from '../../context/BookListContext';

const SearchBook = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState(''); 
    const { bookList, dispatch } = useContext(BookListContext);

    const updateBookList = (e) => {
        e.preventDefault();
        dispatch({ type:'ADD_BOOK', book: {
            title, author
        } });
        setTitle('');
        setAuthor('');
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
