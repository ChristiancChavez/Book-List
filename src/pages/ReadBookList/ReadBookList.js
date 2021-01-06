import React, { useContext } from 'react';
//Components
import BookCardList from '../../Components/BookCardList/BookCardList';
//Context
import { BookListContext } from '../../context/BookListContext';

const ReadBookList = () => {
    const {readBookList} = useContext(BookListContext);
    return readBookList.length ? (
        <div>
            {readBookList.map(book => (
                <BookCardList book={book.book} author={book.author} key={book.id} id={book.id} selected={false} />
            ))}
        </div>
    ) : 
    (
        <div>
            <span>You haven't add books yet</span>
        </div>
    )
};

export default ReadBookList;
