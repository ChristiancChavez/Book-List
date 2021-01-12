import React, { useContext, useState } from 'react';
//Context
import { BookListContext } from './../../context/BookListContext';
//Style 
import './bookCardList.scss';
//Dependencies
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBookDead, faBook, faStar, faBookMedical } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const BookCardList = ({ book, author, id, readBook, favoriteBook, removeBook, addBook }) => {
    

    library.add(faBookDead, faBook, faStar, faBookMedical);
    const { dispatch } = useContext(BookListContext);
    const { addToReadBookList, addToFavoriteBookList } = useContext(BookListContext);
    const [readIconStyle, setReadIconStyle] = useState(false);
    const [favoritesIconStyle, setFavoritesIconStyle] = useState(false);
    const [addIconStyle, setaddIconStyle] = useState(false);

    const setAddedReadBookList = (book, author, id) => {
        addToReadBookList(book, author, id);
        setReadIconStyle(true);
        dispatch({type:'REMOVE_BOOK', id:id})
    }

    const setAddedFavoritesBookList = (book, author, id) => {
        addToFavoriteBookList(book, author, id);
        setFavoritesIconStyle(true);
    }

    const setAddedMyBookList = (book, author) => {
        dispatch({type:'ADD_BOOK',  book: {title:book, author} })
        setaddIconStyle(true);
    }

    const setRemovedMyBookList = (id) => {
        dispatch({type:'REMOVE_BOOK', id:id})
    }
    
    return (
        <div className="card">
            <div className="card-book">
                <h1 className="card-book__info">{book}</h1>
                <h2 className="card-book__info">{author}</h2>
            </div>
            <div className="card-interaction">
                {readBook &&
                    //<Button method={setAddedReadBookList} iconStyle={readIconStyle} icon={faBook} />
                    <button className="card-interaction__icon" onClick={() => setAddedReadBookList(book, author, id)}>
                        <FontAwesomeIcon icon={faBook} className={readIconStyle ? 'selected' : ''} />
                    </button>
                }
                {favoriteBook &&
                    //<Button method={setAddedFavoritesBookList} iconStyle={favoritesIconStyle} icon={faStar} />
                    <button className="card-interaction__icon" onClick={() => setAddedFavoritesBookList(book, author, id)}>
                        <FontAwesomeIcon icon={faStar} className={favoritesIconStyle ? 'selected' : ''} />
                    </button>
                }
                {addBook &&
                    //<Button method={setAddedMyBookList} iconStyle={addIconStyle} icon={faBookMedical} />
                    <button className="card-interaction__icon" onClick={() => setAddedMyBookList(book, author)}>
                        <FontAwesomeIcon icon={faBookMedical} className={addIconStyle ? 'selected' : ''} />
                    </button>
                }
                {removeBook &&
                    //<Button method={setRemovedMyBookList} iconStyle={addIconStyle} icon={faBookDead} />
                    <button className="card-interaction__icon" onClick={() => setRemovedMyBookList(id)}>
                        <FontAwesomeIcon icon={faBookDead} />
                    </button>
                }
            </div>
        </div>
    );
};

export default BookCardList;
