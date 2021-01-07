import React from 'react';
//Style
import './error.scss';

const Error = ({ message }) => {
    return (
        <div className="error">
            <span>{message}</span>
        </div>
    );
};

export default Error;
