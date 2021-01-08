import React, { useContext } from 'react';
//Context
import { BookListContext } from './../../context/BookListContext';
//Components
import BookCardList from './../../Components/BookCardList/BookCardList';
import Error from './../../Components/Error/Error';
//Styles 
import './favorites.scss';

const Favorites = () => {
    const {favoritesBookList } = useContext(BookListContext);

    return favoritesBookList.length ? (
        <div className="favorites">
            {favoritesBookList.map(book => (
                <BookCardList book={book.book} author={book.author} key={book.id} id={book.id} selected={false} />
            ))}
        </div>
    ) : 
    (
        <Error message="You haven't add books yet" />
    )
};

export default Favorites;
