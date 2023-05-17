import React from 'react';
import Headers from './Headers';
import { Outlet } from 'react-router-dom';
import Footers from './Footers';

const Main = () => {
    return (
        <div>
            <Headers></Headers>
            <Outlet></Outlet>
            <Footers></Footers>
        </div>
    );
};

export default Main;