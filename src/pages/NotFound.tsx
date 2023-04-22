import { Outlet } from "react-router";

import AuthLayout from "../components/layouts//auth/auth";

import FormLog from "../components/molecule/form_log/form_log";

const NotFoundPage = () => {

    const useLogin = (e:{user:string; pass:string}) => {

    }

    return(
        <AuthLayout>
            <FormLog callback={useLogin}/>
        </AuthLayout>
    );
}

export default NotFoundPage;