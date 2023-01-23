import React, { FC } from "react";

import style from './Container.module.scss';

interface ContainerProps{
    children: React.ReactNode;
    className?: string;
}

export const Container:FC<ContainerProps> = ({children, className}) => (
    <div className={style.Container + ' ' + className}>
        {children}
    </div>
)