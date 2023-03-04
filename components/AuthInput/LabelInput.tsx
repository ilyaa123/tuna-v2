import { ChangeEventHandler, FC } from "react";

import { Input } from "../../ui/Input/Input";

import style from "./LabelInput.module.scss"

interface AuthInputProps{
    title?: string;
    type: string;
    placeholder?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    value?: string;
}

export const LabelInput:FC<AuthInputProps> = ({title, type, placeholder, onChange, value}) =>{
    return(
    <label className={style.AuthInput}>
        {
            title && (<p>{title}</p>)
        }
        <Input onChange={onChange} placeholder={placeholder} type={type} value={value}/> 
    </label>
    )
}