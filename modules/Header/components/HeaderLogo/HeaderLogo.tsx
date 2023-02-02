import { FC } from "react"

import Image from "next/image";
import Link from "next/link";

import style from './HeaderLogo.module.scss';

export const HeaderLogo:FC = () => (
    <div className={style.HeaderLogo}>
        <Link href="/">
            <Image width={92} height={24} src="/img/logo.svg" alt="Лого Tuna" />
        </Link>
    </div>
)
