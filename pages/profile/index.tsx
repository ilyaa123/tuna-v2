import { NextPage } from "next";

import { Container } from "../../components/Container/Container";
import { Layout } from "../../components/Layout";
import { ProfileLayout } from "../../components/ProfileLayout/ProfileLayout";


const Profile:NextPage = () => {
    return (
        <Layout title="Профиль">
            <Container>
                <ProfileLayout>
                    Привет
                </ProfileLayout>
            </Container>
        </Layout>
    )
}
export default Profile