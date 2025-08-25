import React from 'react';
import Sidebar from '../../Components/Sidebar/Sidebar';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div className="lg:grid grid-cols-10">
            <div className="mb-30 lg:mb-0 col-span-2">
                <Sidebar />
            </div>
            <div className='col-span-8 p-10'>
                <Outlet />
            </div>
        </div>

    );
};

export default Root;