import React from 'react';
//Dependencies 
import { Link } from "react-router-dom";

const OptionNavBar = ({ category, route }) => {
    return (
        <Link
            to={route}
        >
            {category}
        </Link>
    )
}

export default OptionNavBar;
