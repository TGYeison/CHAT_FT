import React, { useContext, useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../hook/useAuth/context';
import axios from 'axios';
import { async } from 'q';

const RequireAuth = ({ children }: { children: JSX.Element }) => {
    const location = useLocation();
    const { token, username } = useContext(AuthContext);


    if(token == '' || username == '') {
        return <Navigate to="/" state={{ from: location }} replace />;
    }

    return children;
};

export default RequireAuth;