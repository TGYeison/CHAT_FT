import { Outlet } from "react-router";

const AuthPage = () => {


    return(
        <div>
            <h1>Auth</h1>

            <Outlet/>
        </div>
    );
}

export default AuthPage;