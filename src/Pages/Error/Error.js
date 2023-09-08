import React from 'react';
import img from '../../assets/404.jpg';

const Error = () => {
    return (
        <div>
            <img style={{height:"650px", margin: "auto"}} src={img} alt="page not found" />
        </div>
    );
};

export default Error;