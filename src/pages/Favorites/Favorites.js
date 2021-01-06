import React, { useContext } from 'react';
//Context
import { BookListContext } from './../../context/BookListContext';
//Components
import BookCardList from './../../Components/BookCardList/BookCardList';

const Favorites = () => {
    const {favoritesBookList } = useContext(BookListContext);

    return favoritesBookList.length ? (
        <div>
            {favoritesBookList.map(book => (
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

export default Favorites;
