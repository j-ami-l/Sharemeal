import React, {  useContext } from 'react';
import { AuthContext } from '../PRovider/AuthProvider';
import { Navigate, useLocation } from 'react-router';

const PrivateRouter = ({children}) => {
    const {user , loading} = useContext(AuthContext) 
    const location = useLocation()


    if(loading) return <h1>Loading .......</h1>

    if(!user)
        return <Navigate to={'/login'} state={{from : location}}></Navigate>

    return (
        children
    );
};

export default PrivateRouter;