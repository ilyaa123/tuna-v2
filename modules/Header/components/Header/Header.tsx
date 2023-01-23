import { FC } from "react";

import { Container } from "../../../../components/Container/Container";
import { HeaderButtons } from "../HeaderButtons/HeaderButtons";
import { HeaderLogo } from "../HeaderLogo/HeaderLogo";
import { HeaderMobile } from "../HeaderMobile/HeaderMobile";
import { HeaderNavigation } from "../HeaderNavigation/HeaderNavigation";

import style from './Header.module.scss';

export const Header:FC = () => {

    return (
        <div className={style.Header}>
            <Container>
                <div className={style.Header__container}>
                    <HeaderLogo />
                    <HeaderNavigation />
                    <HeaderButtons />
                    <HeaderMobile />
                </div>
            </Container>
        </div>
    )
}