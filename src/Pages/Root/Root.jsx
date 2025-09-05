import React from 'react';
import Sidebar from '../../Components/Sidebar/Sidebar';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div className="lg:grid grid-cols-8">
            <div className="mb-30 lg:mb-0 col-span-1">
                <Sidebar />
            </div>
            <div className='col-span-7 lg:p-10 mx-2'>
                <Outlet />
            </div>
        </div>

    );
};

export default Root;