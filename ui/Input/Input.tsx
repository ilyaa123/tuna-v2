import React, { ChangeEventHandler, FC } from "react";

import style from './Input.module.scss';

interface InputProps{
    placeholder?: string;
    border?: string;
    className?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    value?: string | number;
    type: string;
}

export const Input:FC<InputProps> = ({
    placeholder = 'Ввод',
    className,
    onChange,
    value,
    type
}) => {


    return (
        <input className={className + ' ' + style.Input} placeholder={placeholder} onChange={onChange} value={value} type={type} />
    )
}