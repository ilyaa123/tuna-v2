import React, { Dispatch, FC, SetStateAction } from "react";

interface InputProps{
    placeholder?: string;
    color?: string;
    backgroundColor?: string;
    border?: string;
    className?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void | Dispatch<SetStateAction<string>>;
    value?: string | number;
    type: string;
}

export const Input:FC<InputProps> = ({
    placeholder = 'Ввод',
    color = '#8593A7',
    backgroundColor = '#FFFFFF',
    border,
    className,
    onChange,
    value,
    type
}) => {

    const styles = {
        color,
        backgroundColor,
        border
    }

    return (
        <input className={className} style={styles} placeholder={placeholder} onChange={onChange} value={value} type={type} />
    )
}