import React, { useContext } from 'react';
//Context
import { BookListContext } from './../../context/BookListContext';
//Style 
import './bookCardList.scss';
//Dependencies
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBookDead, faBook, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const BookCardList = ({ book, author, id, selected }) => {

    library.add(faBookDead, faBook, faStar);
    const { dispatch } = useContext(BookListContext);
    const { addToReadBookList, addFavoriteBookList } = useContext(BookListContext);

    return (
        <div className="card">
            <div className="card-book">
                <h1 className="card-book__info">{book}</h1>
                <h2 className="card-book__info">{author}</h2>
            </div>
            {selected && 
                <div className="card-interaction">
                    <button className="card-interaction__icon" onClick={() => addToReadBookList(book, author, id)}>
                        <FontAwesomeIcon icon={faBook} />
                    </button>
                    <button className="card-interaction__icon" onClick={() => addFavoriteBookList(book, author, id)}>
                        <FontAwesomeIcon icon={faStar} />
                    </button>
                    <button className="card-interaction__icon" onClick={() => dispatch({type:'REMOVE_BOOK', id:id})}>
                        <FontAwesomeIcon icon={faBookDead} />
                    </button>
                </div>
            }
            
        </div>
    );
};


export default BookCardList;
