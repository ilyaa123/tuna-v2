import { NextPage } from "next";
import { Layout } from "../../components/Layout";
import { AuthMain } from "../../modules/Auth/Index";

const Authorization:NextPage = () =>{
    return(
        <Layout title = "Авторизация">
            <AuthMain/>
        </Layout>
    )
}
export default Authorization