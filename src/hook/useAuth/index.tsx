import { useState } from "react";
import { useNavigate } from "react-router";

import axios from 'axios';

export const useAuth = () => {

    const [token, setToken] = useState('');
    const [username, setUserName] = useState('');
    const [errors, setError] = useState('');

    const getLogin = async(profile: {user:string, pass:string}) => {

        try {
            const auth = await axios.post('http://localhost:3500/auth/singin', {
                username: profile.user,
                password: profile.pass
            });

            setUserName(profile.user)
            setToken(auth.data.token);


            //window.location.pathname = '/chat';
        } catch (error: any) {
            setError(error.status);
        }
    }

    return {
        token, 
        username, 
        setUserName,
        getLogin,
        errors
    }
}