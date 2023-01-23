import Image from "next/image";
import { FC } from "react";
import { Container } from "../Container/Container";

import style from './Footer.module.scss';

export const Footer:FC = () => {

    return (
        <div className={style.Footer}>
            <Container>
                <div className={style.Footer__top}>
                    <Image width={92} height={24} src="/img/logo_footer.svg" alt="logo footer"/>
                    <div className={style.Footer__social}>
                        social icons?  
                    </div>
                </div>
                <div className={style.Footer__bottom}>
                    © 2022 tuneyadec  
                </div>
            </Container>
        </div>
    )
}