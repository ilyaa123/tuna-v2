import { FC } from "react";
import { Button } from "../../../../ui/Button";
import { AuthInput } from "../../../../components/AuthInput/AuthInput";
import { AuthContainer } from "../../../../components/AuthContainer/AuthContainer";
import Link from "next/link";

import style from "./AuthMain.module.scss";

const click = () => {}

export const AuthMain:FC = () => {
    return(
        <div className={style.AuthMain__wrapper}>
            <AuthContainer>
                <div className={style.AuthMain}>
                    <h1>Войти</h1>
                    <div className={style.AuthInput__container}>
                       <AuthInput onChange={click} title="E-mail" placeholder="tuna@mail.ru" type="text"/>
                       <AuthInput onChange={click} title="Пароль" placeholder="Введите пароль" type="password"/>
                    </div>
                    <Button className={style.AuthMain__button} text="Войти"></Button>
                    <Link href="#" className={style.AuthMain__link}>Забыли пароль?</Link>
                    <Link href="/auth/reg" className={style.AuthMain__link_footer}>Ещё нет аккаунта?</Link>
                </div>
            </AuthContainer>
        </div>
    )
}