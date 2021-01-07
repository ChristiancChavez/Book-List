import React, { useState } from 'react';
//Dependencies 
import axios from 'axios';
//Components
import BookCardList from './../../Components/BookCardList/BookCardList';
const BookList = () => {

    const [bookList, setBookList] = useState([]);
    const [query, setQuery] = useState('');
    const requestData = `https://www.googleapis.com/books/v1/volumes?q=${query}`;

    const fetchData = async () => {
        const request = await axios.get(requestData).then(function (response) {
            return response.data;
                }).catch(function (error) {
                    console.error(error);
                });
                setBookList(request.items);
                console.log(request.items, 'hdffblfbhsfbh');
     };

    return (
        <div>
            <input required name="search" value={query} placeholder="Search your next book"  onChange={(e) => setQuery(e.target.value)} type="text" />
            <button onClick={fetchData}>+</button>
            {bookList.length && bookList.map(book => (
                <BookCardList book={book.volumeInfo.title} author={book.volumeInfo.authors ? book.volumeInfo.authors[0] : 'No author'} id={book.id} key={book.id} />
            ))}
            {!bookList.length && 
                <div>
                    <span>That keyword doesn't match with any book</span>
                </div>
            }
        </div>
    );
};

export default BookList;
