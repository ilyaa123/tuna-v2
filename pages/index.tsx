import { NextPage } from "next"
import { Footer } from "../components/Footer/Footer"

import { Layout } from "../components/Layout"

import { Header } from "../modules/Header"
import { Main } from "../modules/Main"

const Home:NextPage = () => {

  	return (
    	<Layout title="Главная">
			<Header />
			<Main />
			<Footer />
		</Layout>
  	)
}
export default Home
