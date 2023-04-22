import { ContainerScreen, ContainerPanel } from "../../atomic/container/container";

interface AuthProps {
    children: string | JSX.Element;
}

const AuthLayout = ({children}:AuthProps) => {

    return(
        <ContainerPanel>  
            <div className="layout__auth">
                <div className="col layout__auth-header">
                    <h2 className=" fw-bold mb-2 text-uppercase text-center">Login</h2>
                    <p className="text-white-50 mb-5 text-center">Please enter your login and password!</p>
                </div>
                <div className="col d-flex flex-wrap justify-space-center">
                    {children}
                </div>
            </div>
        </ContainerPanel>
    );
}

export default AuthLayout;