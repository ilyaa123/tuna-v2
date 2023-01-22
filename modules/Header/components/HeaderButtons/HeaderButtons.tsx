import { useRouter } from "next/router";
import { FC } from "react";
import { Button } from "../../../../ui/Button";

import style from './HeaderButtons.module.scss';

export const HeaderButtons:FC = () => {

    const router = useRouter()

    const handleOnAuthorization = () => {
        router.push('/')
    }

    const handleOnRegistration = () => {
        router.push('/')
    }

    return (
        <div className={style.HeaderButtons}>
            <Button className={style.Button__auth} onClick={handleOnAuthorization} text='Вход' color="#274B90" backgroundColor="FEFEFE"/>
            <Button className={style.Button__reg} onClick={handleOnRegistration} text='Регистрация' />
        </div>
    )
}