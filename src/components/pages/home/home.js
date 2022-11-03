import React from "react";
import '../../../App.css'
import Header from "./header";
import Main from "./main"
import Section_1 from "./section-1"
import Section_2 from "./section-2"
import Footer from "./footer"

export default function Home() {
    return (
        <>
            <Header />
            <Main />
            <Section_1 />
            <Section_2 />
            <Footer />
        </>
    )

}