import { FC, useState } from "react";
import { Button } from "../../../../ui/Button/Button";
import { LabelInput } from "../../../../components/Inputs/LabelInput/LabelInput";
import { AuthContainer } from "../../../../components/AuthContainer/AuthContainer";
import Link from "next/link";

import style from "./RegMain.module.scss";
import { useRouter } from "next/router";

export const RegMain:FC = () => {

    const [email, setEmail] = useState<string>('');
    const [passw, setPassw] = useState<string>('');
    const [emailDirty, setEmailDirty] = useState<boolean>(false);
    const [passDirty, setPassDirty] = useState<boolean>(false);
    const [emailError, setEmailError] = useState('Введите Email');
    const [passError, setPassError] = useState('Введите пароль');

    const router = useRouter();

    const handleOnSubmit = () => {

    }

    const handleOnClick = () => {}

    return(
        <div className={style.RegMain__wrapper}>
            <AuthContainer onSubmit={handleOnSubmit}>
                <div className={style.RegMain}>
                    <h1>Регистрация</h1>
                    <div className={style.AuthInput__container}>
                        <LabelInput onChange={(e) => setEmail(e.target.value)} value={email} title="E-mail" placeholder="tuna@mail.ru" type="text"/>
                        <LabelInput onChange={(e) => setPassw(e.target.value)} value={passw} title="Пароль" placeholder="Введите пароль" type="password"/>
                    </div>
                    <Button onClick={handleOnClick} className={style.RegMain__button} text="Регистрация" />
                    <Link href="/auth" className={style.RegMain__link_footer}>Уже есть аккаунт?</Link>
                </div>
            </AuthContainer>
        </div>
    )
}