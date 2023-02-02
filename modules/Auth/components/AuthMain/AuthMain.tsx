import { FC, useState } from "react";
import { Button } from "../../../../ui/Button/Button";
import { AuthInput } from "../../../../components/AuthInput/AuthInput";
import { AuthContainer } from "../../../../components/AuthContainer/AuthContainer";
import Link from "next/link";

import style from "./AuthMain.module.scss";

export const AuthMain:FC = () => {

    const [email, setEmail] = useState<string>('');
    const [passw, setPassw] = useState<string>('');

    const handleOnSubmit = () => {

    }

    const handleOnClick = () => {

    }

    return(
        <div className={style.AuthMain__wrapper}>
            <AuthContainer onSubmit={handleOnSubmit}>
                <div className={style.AuthMain}>
                    <h1>Войти</h1>
                    <div className={style.AuthInput__container}>
                       <AuthInput onChange={(e) => setEmail(e.target.value)} value={email} title="E-mail" placeholder="tuna@mail.ru" type="text"/>
                       <AuthInput onChange={(e) => setPassw(e.target.value)} value={passw} title="Пароль" placeholder="Введите пароль" type="password"/>
                    </div>
                    <Button onClick={handleOnClick} className={style.AuthMain__button} text="Войти" />
                    <Link href="#" className={style.AuthMain__link}>Забыли пароль?</Link>
                    <Link href="/auth/reg" className={style.AuthMain__link_footer}>Ещё нет аккаунта?</Link>
                </div>
            </AuthContainer>
        </div>
    )
}