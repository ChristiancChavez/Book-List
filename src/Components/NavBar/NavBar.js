import React from 'react';
//Components
import OptionNavBar from './../OptionNavBar/OptionNavBar';
//Styles
import './navBar.scss';
//Dependencies
const { v4: uuid_v4 } = require('uuid');

const OPTIONS_NAV = [ 
    {category:'Add Book', id:uuid_v4(), route:'/home'},
    {category:'My List', id:uuid_v4(), route:'/myList'},
    {category:'Read', id:uuid_v4(), route:'/read'},
    {category:'Favorites', id:uuid_v4(), route:'/favorites'},
    {category:'Book List', id:uuid_v4(), route:'/bookList'}, 
];

const NavBar = () => (
    <div className="navbar">
        {OPTIONS_NAV.map(option => <OptionNavBar category={option.category} key={option.id} route={option.route} />)}
    </div>
);

export default NavBar;