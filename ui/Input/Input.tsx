import React, { ChangeEventHandler, FC } from "react";

import style from './Input.module.scss';

interface InputProps{
    placeholder?: string;
    border?: string;
    className?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    onBlur?: ChangeEventHandler<HTMLInputElement>
    value?: string | number;
    type: string;
}

export const Input:FC<InputProps> = ({
    placeholder = 'Ввод',
    className,
    onChange,
    onBlur,
    value,
    type
}) => {
    
    return (
        <input className={className + ' ' + style.Input} placeholder={placeholder} onChange={onChange} onBlur={onBlur} value={value} type={type} />
    )
}