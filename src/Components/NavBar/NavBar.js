import React from 'react';
//Components
import OptionNavBar from './../OptionNavBar/OptionNavBar';

const { uuid } = require('uuidv4');

const OPTIONS_NAV = [ 
    {category:'Add Book', id:uuid(), route:'/home'},
    {category:'My List', id:uuid(), route:'/myList'},
    {category:'Read', id:uuid(), route:'/read'},
    {category:'Favorites', id:uuid(), route:'/favorites'},
    {category:'Book List', id:uuid(), route:'/bookList'}, 
];

const NavBar = () => (
    <div className="navbar">
        {OPTIONS_NAV.map(option => <OptionNavBar category={option.category} key={option.id} route={option.route} />)}
    </div>
);

export default NavBar;