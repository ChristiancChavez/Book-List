import React, { useContext } from 'react';
//Context
import { BookListContext } from './../../context/BookListContext';

const BookCardList = ({ book, author, id, selected }) => {

    const { dispatch } = useContext(BookListContext);
    const { addToReadBookList, addFavoriteBookList } = useContext(BookListContext);

    return (
        <div>
            <div>
                <h1>{book}</h1>
                <h2>{author}</h2>
            </div>
            {selected && 
                <div>
                    <button onClick={() => addToReadBookList(book, author, id)}>Read</button>
                    <button onClick={() => addFavoriteBookList(book, author, id)}>Favorite</button>
                    <button onClick={() => dispatch({type:'REMOVE_BOOK', id:id})}>Remove</button>
                </div>
            }
            
        </div>
    );
};


export default BookCardList;
