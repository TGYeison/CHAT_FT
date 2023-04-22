import { useContext } from "react";


import { AuthContext } from "../hook/useAuth/context";

import AuthLayout from "../components/layouts//auth/auth";

import FormLog from "../components/molecule/form_log/form_log";
import { useNavigate } from "react-router";

const AuthPage = () => {
    
    const navigate = useNavigate();
    const {getLogin} = useContext(AuthContext);

    const useLogin = (e:{user:string; pass:string}) => {
        try {
            getLogin(e);
        } catch (error) {} 
        
        navigate('/chat');

    }

    return(
        <AuthLayout>
            <FormLog callback={useLogin}/>
        </AuthLayout>
    );
}

export default AuthPage;