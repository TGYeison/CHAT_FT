import { useRef } from "react";

interface InputMessageProps {
    placeholder?: string;
    callback: (value: string) => void;
}

const InputMessage = (props:InputMessageProps) => {
    const inputRef = useRef<HTMLInputElement>(null)
    const { callback } = props;

    const getValue = (e:any) => {
        e.preventDefault();
        callback(inputRef.current?.value || '');
    }

    return (
        <form onSubmit={getValue} className="cntrl__message-content">
            <input 
                type="text"
                ref={inputRef}
                placeholder={props.placeholder}
                className="cntrl__message-input"
            />
            <button 
                className="cntrl__message-btn btn btn-primary fs-4"
            >
                <span>&gt;</span> 
            </button>
        </form>
    );
}

export default InputMessage;