import React from 'react';
//Dependencies 
import { Link } from "react-router-dom";
//Styles
import './optionsNavBar.scss';

const OptionNavBar = ({ category, route }) => {

    return (
        <Link
            className="options"
            to={route}
        >
            {category}
        </Link>
    )
}

export default OptionNavBar;
