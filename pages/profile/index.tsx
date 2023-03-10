import { NextPage } from "next";
import { Container } from "../../components/Container/Container";

import { Layout } from "../../components/Layout";
import { LayoutPages } from "../../components/LayoutPages/LayoutPages";

import { Profile } from "../../modules/Profile"

const ProfilePage:NextPage = () => {
    return (
        <Layout title="Профиль">
            <Container>
                <LayoutPages>
                    <Profile />
                </LayoutPages>
            </Container>
        </Layout>
    )
}
export default ProfilePage