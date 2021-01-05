import React, { useContext } from 'react';
//Context
import { BookListContext } from './../../context/BookListContext';

const BookCardList = ({ book, author, id }) => {

    const { dispatch } = useContext(BookListContext)

    return (
        <div>
            <div>
                <h1>{book}</h1>
                <h2>{author}</h2>
            </div>
            <div>
                <button>Read</button>
                <button>Favorite</button>
                <button onClick={() => dispatch({type:'REMOVE_BOOK', id:id})}>Remove</button>
            </div>
            
        </div>
    );
};

export default BookCardList;
