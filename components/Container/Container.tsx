import React, { FC } from "react";

import style from './Container.module.scss';

interface ContainerProps{
    children: React.ReactNode
}

export const Container:FC<ContainerProps> = ({children}) => (
    <div className={style.Container}>
        {children}
    </div>
)