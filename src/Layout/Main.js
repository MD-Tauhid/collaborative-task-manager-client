import React from 'react';
import Menu from '../Pages/Menu/Menu';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Menu></Menu>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;