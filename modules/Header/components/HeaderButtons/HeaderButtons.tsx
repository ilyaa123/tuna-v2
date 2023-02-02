import { FC } from "react";

import { useRouter } from "next/router";

import { Button } from "../../../../ui/Button/Button";

import style from './HeaderButtons.module.scss';

export const HeaderButtons:FC = () => {

    const router = useRouter()

    const handleOnAuthorization = () => {
        router.push('/auth')
    }

    const handleOnRegistration = () => {
        router.push('/auth/reg')
    }

    return (
        <div className={style.HeaderButtons}>
            <Button className={style.Buttons__auth} onClick={handleOnAuthorization} text='Вход'/>
            <Button className={style.Buttons__reg} onClick={handleOnRegistration} text='Регистрация' />
        </div>
    )
}