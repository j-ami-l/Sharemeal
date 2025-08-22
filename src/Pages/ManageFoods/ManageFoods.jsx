import React, { use, useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../PRovider/AuthProvider';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import useMyfoodsApi from '../../Api/useMyfoodsApi';
import Table from '../../Components/Table/MyFoods';



const ManageFoods = () => {
    const { myfoodsPromise } = useMyfoodsApi()

    return (
        <div>
            <Table myfoodsPromise={myfoodsPromise()}></Table>
        </div>
    );
};

export default ManageFoods;