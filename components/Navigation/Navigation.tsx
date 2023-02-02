import { FC } from "react";

import Link from "next/link";

import style from './Navigation.module.scss';

export const Navigation:FC = () => {

    return (
        <>
        <li className={style.Navigation__item}>
            <Link href="/">Проекты</Link>
        </li>
        <li className={style.Navigation__item}>
            <Link href="/">Вакансии</Link>
        </li>
        <li className={style.Navigation__item}>
            <Link href="/">О нас</Link>
        </li>
        </>
    )
}