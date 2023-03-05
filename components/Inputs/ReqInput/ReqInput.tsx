import { ChangeEventHandler, FC } from "react";

import { Input } from "../../../ui/Input/Input";

import style from "./ReqInput.module.scss"

interface ReqInputProps{
    title?: string;
    titleError?: string;
    type: string;
    placeholder?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    onBlur?: ChangeEventHandler<HTMLInputElement>;
    value?: string;
}

export const LabelInput:FC<ReqInputProps> = ({title, titleError, type, placeholder, onChange, onBlur, value}) =>{
    return(
    <label className={style.ReqInput}>
        {title && (<p>{title}</p>)}
        {titleError && (<p>{}</p>)}
        <Input onChange={onChange} onBlur={onBlur} placeholder={placeholder} type={type} value={value}/> 
    </label>
    )
}