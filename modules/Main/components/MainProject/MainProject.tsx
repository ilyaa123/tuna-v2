import Image from "next/image";
import { FC } from "react";

import style from './MainProject.module.scss';

export const MainProject:FC = () => {

    return (
        <div className={style.Project__container}>
            <h2>Хочешь работать над проектом?</h2>
            <ul className={style.Project__list}>
                <li className={style.Project__item}>
                    <Image className={style.Project__image} width={130} height={130} src="/img/mainproject1.svg" alt="mainproject image"/>
                    <h4>Найди команду</h4>
                    <p>Выставляй объявления о наборе на свой проект</p>
                </li>
                <li className={style.Project__item}>
                    <Image className={style.Project__image} width={130} height={130} src="/img/mainproject2.svg" alt="mainproject image"/>
                    <h4>Вступай как участник</h4>
                    <p>Выбирай из опубликованных объявлений и подавай заявку</p>
                </li>
                <li className={style.Project__item}>
                    <Image className={style.Project__image} width={130} height={130} src="/img/mainproject3.svg" alt="mainproject image"/>
                    <h4>Пополняй портфолио</h4>
                    <p>Реализованные проекты добавятся в резюме</p>
                </li>
            </ul>
        </div>
    )
}