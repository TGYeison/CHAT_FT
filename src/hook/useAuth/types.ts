import { Dispatch, SetStateAction } from "react"

interface typesAuth {
    token: string; 
    username: string; 
    setUserName: Dispatch<SetStateAction<string>>;
    getLogin: (e:{user:string; pass:string}) => void;
    errors: string;
}

export type TypesAuth = typesAuth;

