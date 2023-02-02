import { FC } from "react";

import { Container } from "../../../../components/Container/Container";
import { Newsletter } from "../../../../components/Newsletter/Newsletter";
import { Intership } from "../Intership/Intership";
import { MainContent } from "../MainContent/MainContent";
import { MainProject } from "../MainProject/MainProject";

import style from './Main.module.scss';

export const Main:FC = () => (
    <div className={style.Main}>
        <Container>
            <MainContent />
            <Intership />
            <MainProject />
        </Container>
        <Newsletter />
    </div>
)
