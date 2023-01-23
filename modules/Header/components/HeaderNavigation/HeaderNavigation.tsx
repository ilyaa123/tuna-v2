import Link from "next/link";
import { FC } from "react";
import { Navigation } from "../../../../components/Navigation/Navigation";

import style from './HeaderNavigation.module.scss';

export const HeaderNavigation:FC = () => {

    return (
        <ul className={style.HeaderNavigation}>
            <Navigation />
        </ul>
    )
}