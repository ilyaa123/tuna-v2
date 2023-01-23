import React, { FC } from "react";

interface ButtonProps{
    text?: string;
    padding?: string;
    backgroundColor?: string;
    color?: string;
    children?: React.ReactNode | string;
    border?: string;
    fonsSize?: number;
    className?: string;
    onClick?: (event?: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button:FC<ButtonProps> = ({
    text,
    padding = '12px 24px',
    backgroundColor = '#305DB4',
    color = '#FFFFFF',
    border = '1px solid #FFFFFF',
    fonsSize = 16,
    children,
    className,
    onClick
}) => {

    const styles = {
        padding,
        backgroundColor,
        color,
        border,
        fonsSize
    }

    return (
        <button className={className} onClick={onClick} style={styles}>
            {text || children}
        </button>
    )
}