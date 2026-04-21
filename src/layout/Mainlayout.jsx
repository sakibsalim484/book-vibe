import React from 'react';
import Navber from '../Component/Shared/Navber';
import { Outlet } from 'react-router';

const Mainlayout = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
        </div>
    );
};

export default Mainlayout;