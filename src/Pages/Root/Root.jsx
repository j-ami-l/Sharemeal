import React from 'react';
import Sidebar from '../../Components/Sidebar/Sidebar';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div className='lg:grid grid-cols-10'>
            <div className='mb-10 lg:mb-0 col-span-2'>
                <Sidebar></Sidebar>
            </div>
            <div className='col-span-8'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;