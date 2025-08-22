import React, { useContext } from 'react';
import { AuthContext } from '../PRovider/AuthProvider';
import useAxiosSecure from '../Hooks/useAxiosSecure';

const useMyRequest = () => {
    const {user} = useContext(AuthContext)
    const api = useAxiosSecure()
    const MyRequestsPromise = () => {
        return api.get(`/myrequests?email=${user?.email}`).then(res => res.data)
    }

    return {
        MyRequestsPromise
    }
};

export default useMyRequest;