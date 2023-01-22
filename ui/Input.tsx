import React, { FC } from "react";

interface InputProps{
    placeholder?: string;
    color?: string;
    backgroundColor?: string;
    border?: string;
    className?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value?: string | number
}

export const Input:FC<InputProps> = ({
    placeholder = 'Ввод',
    color = '#8593A7',
    backgroundColor = '#FFFFFF',
    border = '1px solid #FFFFFF',
    className,
    onChange,
    value
}) => {

    const styles = {
        color,
        backgroundColor,
        border
    }

    return (
        <input className={className} style={styles} placeholder={placeholder} onChange={onChange} value={value} />
    )
}