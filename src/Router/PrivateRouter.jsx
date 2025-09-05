import React, {  useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router';
import Loading from '../Components/Loading';

const PrivateRouter = ({children}) => {
    const {user , loading} = useContext(AuthContext) 
    const location = useLocation()


    if(loading) return <Loading></Loading>

    if(!user)
        return <Navigate to={'/login'} state={{from : location}}></Navigate>

    return (
        children
    );
};

export default PrivateRouter;