import { NextPage } from "next";
import { Container } from "../../components/Container/Container";

import { Layout } from "../../components/Layout";
import { LayoutPages } from "../../components/LayoutPages/LayoutPages";

import { Resume } from "../../modules/Resume"

const ResumePage:NextPage = () => {
    return (
        <Layout title="Профиль">
            <Container>
                <LayoutPages>
                    <Resume />
                </LayoutPages>
            </Container>
        </Layout>
    )
}
export default ResumePage