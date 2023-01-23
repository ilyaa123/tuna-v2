import { FC } from "react";

import { Container } from "../../../../components/Container/Container";
import { HeaderButtons } from "../HeaderButtons/HeaderButtons";
import { HeaderLogo } from "../HeaderLogo/HeaderLogo";
import { Navigation } from "../Navigation/Navigation";

import style from './Header.module.scss';

export const Header:FC = () => {

    return (
        <div className={style.Header}>
            <Container>
                <div className={style.Header__container}>
                    <HeaderLogo />
                    <Navigation />
                    <HeaderButtons />
                </div>
            </Container>
        </div>
    )
}