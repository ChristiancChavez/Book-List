import React, { useContext } from 'react';
//Components
import Error from './../../Components/Error/Error';
import BookCardList from '../../Components/BookCardList/BookCardList';
//Context
import { BookListContext } from '../../context/BookListContext';
//Styles
import './readBookList.scss';


const ReadBookList = () => {
    
    const {readBookList} = useContext(BookListContext);
    return readBookList.length ? (
        <div className="read-list">
            {readBookList.map(book => (
                <BookCardList book={book.book} author={book.author} key={book.id} id={book.id} selected={false} />
            ))}
        </div>
    ) : 
    (
        <Error message="You haven't add books yet" />
    )
};

export default ReadBookList;
