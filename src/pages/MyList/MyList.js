import React, { useContext } from 'react';
//Components
import BookCardList from './../../Components/BookCardList/BookCardList';
//Context
import { BookListContext } from './../../context/BookListContext';


const MyList = () => {

    const {bookList} = useContext(BookListContext);

    return bookList.length ? (
        <div>
            {bookList.map(book => (
                <BookCardList book={book.book} author={book.author} key={book.id} id={book.id} />
            ))}
        </div>
    ) : 
    (
        <div>
            <span>You haven't add books yet</span>
        </div>
    )
};

export default MyList;
