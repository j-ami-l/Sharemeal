import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../PRovider/AuthProvider';
import useAxiosSecure from '../Hooks/useAxiosSecure';

const useMyfoodsApi = () => {
    const { user } = useContext(AuthContext)
    const api = useAxiosSecure()
    const myfoodsPromise = () =>{
        return api.get(`/myfoods?email=${user?.email}`).then(res=> res.data)
    }

    return {
        myfoodsPromise
    }
};

export default useMyfoodsApi;