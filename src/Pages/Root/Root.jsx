import React from 'react';
import Sidebar from '../../Components/Sidebar/Sidebar';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div className="lg:grid grid-cols-[1.5fr_8.5fr]">
            <div className="mb-30 lg:mb-0">
                <Sidebar />
            </div>
            <div>
                <Outlet />
            </div>
        </div>

    );
};

export default Root;