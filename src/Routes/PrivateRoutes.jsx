import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import Skeleton from '../components/Skeleton';
import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    
    if (loading) {
        return <div className='flex justify-center items-center min-h-screen'> <progress className="progress w-56"></progress></div>
    }

    if (user?.email) {
        return children;
    }

    return <Navigate to="/login"></Navigate>
};

export default PrivateRoutes;