import Image from "next/image";
import Link from "next/link";
import { FC } from "react"

import style from './HeaderLogo.module.scss';

export const HeaderLogo:FC = () => {

    return (
        <div className={style.HeaderLogo}>
            <Link href="/">
                <Image width={92} height={24} src="/img/logo.svg" alt="Лого Tuna" />
            </Link>
        </div>
    )
}