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
        <div>
            <form onSubmit={updateBookList}>
                <input required name="title" type="text" value={title} placeholder=" Book's title" onChange={(e) => setTitle(e.target.value)}/>
                <input required name="author" type="text" value={author} placeholder="Book's author" onChange={(e) => setAuthor(e.target.value)}/>
                <button type="submit" >+</button>
            </form>
            <h1>{bookList.length}</h1>
        </div>
    )
};

export default SearchBook;
