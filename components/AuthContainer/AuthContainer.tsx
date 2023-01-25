import { FC } from "react";


import style from "./AuthContainer.module.scss";

interface AuthContainerPropse{
    children?: React.ReactNode;
    onSubmit?: () => void;
}

export const AuthContainer:FC<AuthContainerPropse> = ({children, onSubmit}) =>{
    return(
        <form onSubmit={onSubmit} className={style.AuthContainer}>
            {children}
        </form>
    )
}