import React, { FC } from "react";
import { SideBar } from "../SideBar/SideBar";

import style from './ProfileLayout.module.scss';

interface ProfileLayoutProps{
    children?: React.ReactNode
}

export const ProfileLayout:FC<ProfileLayoutProps> = ({children}) => {

    return (
        <div className={style.ProfileLayout}>
            <SideBar />
            <div className={style.ProfileLayoutContent}>
                {children}
            </div>
        </div>
    )
}