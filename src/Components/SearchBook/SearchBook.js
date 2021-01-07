import React, { useState, useContext } from 'react';
//Context
import { BookListContext } from '../../context/BookListContext';
//Style
import './searchBook.scss';
//Dependencies
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBookMedical } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SearchBook = () => {
    library.add(faBookMedical);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState(''); 
    const { dispatch } = useContext(BookListContext);

    const updateBookList = (e) => {
        e.preventDefault();
        dispatch({ type:'ADD_BOOK', book: {
            title, author
        } });
        setTitle('');
        setAuthor('');
    }

    return (
        <div className="search">
            <form onSubmit={updateBookList} className="search-form">
                <input className="search-form__input" required name="title" type="text" value={title} placeholder=" Book's title" onChange={(e) => setTitle(e.target.value)}/>
                <input className="search-form__input" required name="author" type="text" value={author} placeholder="Book's author" onChange={(e) => setAuthor(e.target.value)}/>
                <button className="search-form__add" type="submit" >
                    <FontAwesomeIcon icon={faBookMedical} />
                </button>
            </form>
        </div>
    )
};

export default SearchBook;
