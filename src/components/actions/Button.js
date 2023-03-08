import React from 'react';

const Button = ({type, value, className, onClick}) => {
    return (
        <button type={type} value={value} className={className} onClick={onClick}>{value}</button>
    );
};

export default Button;