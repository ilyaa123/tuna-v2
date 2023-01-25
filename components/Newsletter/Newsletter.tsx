import { set } from "immer/dist/internal";
import React, { FC, useState } from "react";
import { Button } from "../../ui/Button";
import { Input } from "../../ui/Input";
import { Container } from "../Container/Container";

import style from './Newsletter.module.scss';

export const Newsletter:FC = () => {

    const [value, setValue] = useState<string>('')

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    }

    const handleOnClick = () => {

    }

    const handleOnSubmit = (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
    }

    return (
        <div className={style.Newsletter}>
            <Container className={style.Newsletter__container}>
                <div className={style.Newsletter__content}>
                    <h3>Подпишись на рассылку с новостями о платформе</h3>
                    <form className={style.Newsletter__form} onSubmit={handleOnSubmit}>
                        <Input className={style.Newsletter__input} onChange={handleOnChange} value={value} placeholder="Введите электронную почту" type={"text"} />
                        <Button className={style.Newsletter__button} onClick={handleOnClick} padding="9px 36px" text="Подписаться" />
                    </form>
                </div>
            </Container>
        </div>
    )
}