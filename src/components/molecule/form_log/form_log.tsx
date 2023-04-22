import { useRef } from "react";


interface InputMessageProps {
    callback: (e:{user: string; pass:string}) => void;
}

const FormLog = (props:InputMessageProps) => {
    const userRef = useRef<HTMLInputElement>(null);
    const passRef = useRef<HTMLInputElement>(null);
    const { callback } = props;

    const getValue = (e:any) => {
        e.preventDefault();
        const profile = {
            user: userRef.current?.value || '',
            pass: passRef.current?.value || ''
        }

        callback(profile);
    }

    return (
        <form onSubmit={getValue} className="form__log-content">
            <input
                type="text"
                ref={userRef}
                className="cntrl__field"
                placeholder="User Name"
            />
            <input 
                type="password"
                ref={passRef}
                className="cntrl__field"
                placeholder="Password"
            />
            <button 
                className="btn col-8 btn-primary fs-5"
            >
                Log In 
            </button>
        </form>
    );
}

export default FormLog;