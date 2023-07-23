import React from 'react';
import Navber from './Shared/Navber';
import Footer from './Shared/Footer';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <>
            <Navber></Navber>
            <Outlet/>
            <Footer></Footer>
        </>
    );
};

export default Main;