import { NextPage } from "next";
import { Layout } from "../../components/Layout";
import { RegMain } from "../../modules/Auth/components/RegMain/RegMain";

const Registration:NextPage = () =>{
    return(
        <Layout title = "Регистрация">
            <RegMain/>
        </Layout>
    )
}

export default Registration