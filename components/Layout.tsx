import Head from "next/head";
import React, { FC } from "react";
import { Header } from "../modules/Header";
import { Footer } from "./Footer/Footer";

interface LayoutProps{
    title: string;
    description?: string;
    keywords?: string;
    children?: React.ReactNode | string;
}

export const Layout:FC<LayoutProps> = (
{
    title,
    description = 'tuna - это платформа, где ты можешь найти стажировку, место практики или первую работу, а также собрать команду на собственный проект',
    keywords = 'tuna работа студенты без опыты',
    children
}
) => {

    return (
        <>
            <Head>
                <meta name="description" content={description} />      
                <meta name="keywords" content={keywords} />
                <title>{title}</title>      
            </Head>
            <Header/>
            {children}
            <Footer/>
        </>
    )
}