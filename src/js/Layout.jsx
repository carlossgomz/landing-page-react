import React from "react";
import Navbar from "./component/Navbar.jsx"
import Home from "./views/Home.jsx"
import Footer from "./component/Footer.jsx";

const Layout =()=>{
    return(
        <>
        <Navbar/>
        <Home/>
        <Footer/>
        </>

    );
}
export default Layout