import { NextPage } from "next"

import { Layout } from "../components/Layout"

import { Main } from "../modules/Main"

const Home:NextPage = () => {
	
  	return (
    	<Layout title="Главная">
			<Main />
		</Layout>
  	)
}

export default Home;
