import { Dispatch, FC, SetStateAction } from "react";
import { Input } from "../../ui/Input";

import style from "./AuthInput.module.scss"

interface AuthInputProps{
    title?: string;
    type: string;
    placeholder?: string;
    onChange: Dispatch<SetStateAction<string>>;
    value?: string;
}

export const AuthInput:FC<AuthInputProps> = ({title, type, placeholder, onChange, value}) =>{
    return(
    <div className={style.AuthInput}>
        <p>{title}</p>
        <Input placeholder={placeholder} type={type} value={value}/> 
    </div>
    )
}