import React, { FC } from "react";

import style from './Button.module.scss';

interface ButtonProps{
    text?: string;
    children?: React.ReactNode | string;
    border?: string;
    className?: string;
    onClick?: (event?: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button:FC<ButtonProps> = ({
    text,
    children,
    className,
    onClick
}) => (
    <button className={className + ' ' + style.Button} onClick={onClick}>
        {text || children}
    </button>
)
