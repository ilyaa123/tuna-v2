import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { FC, useRef, useState } from "react";
import { Navigation } from "../../../../components/Navigation/Navigation";
import { Button } from "../../../../ui/Button";

import style from './HeaderMobile.module.scss';

export const HeaderMobile:FC = () => {

    const router = useRouter();

    const [ active, setActive ] = useState<boolean>(false)

    const listRef = useRef(null)

    const handleOnClickOverlay = (event: React.MouseEvent<HTMLDivElement>) => {
        if (event.target !== listRef.current){
            setActive(false)
        }
    }

    return (
        <>
            <button onClick={() => setActive(prev => !prev)} className={classNames(style.HeaderMobile__button, {[style.HeaderMobile__button_active]: active})}>
                <p></p>
            </button>
            <div onClick={handleOnClickOverlay} className={classNames(style.HeaderMobile__overlay, {[style.HeaderMobile__overlay_active]: active})}>
                <div ref={listRef} className={classNames(style.HeaderMobile__list, {[style.HeaderMobile__list_active]: active})}>
                    <Navigation />
                    <Button onClick={() => router.push('/auth/reg')} className={style.HeaderMobile__list_registr} text="Регистрация" />
                    <Button onClick={() => router.push('/auth')} className={style.HeaderMobile__list_auth} color="#274B90" backgroundColor="#FFFFFF" text="Вход" />
                </div>
            </div>
        </>
    )
}