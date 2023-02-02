import { FC } from "react";

import Image from "next/image";

import { Search } from "../Search/Search";

import style from './MainConent.module.scss';

export const MainContent:FC = () => (
    <div className={style.Main__container}>
        <div className={style.Main__content}>
            <h1>Поиск работы <br /> <span>студенту без опыта</span> </h1>
            <p>tuna - это платформа, где ты можешь найти стажировку, место практики или первую работу, а также собрать команду на собственный проект</p>
            <Search />
        </div>
        <div className={style.Main__image}>
            <Image className={style.Main__image_img} width={622} height={456} src="/img/main.png" alt="Главная картинка" />
        </div>
    </div>
)
