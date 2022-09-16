import React from "react"
import Jumbotron from "../component/Jumbotron.jsx";
import Card from "../component/Card.jsx"
import Footer from "../component/Footer.jsx";



const Home =()=>{
    return(

        <div style={{paddingTop:"3rem"}} className="container">
        <Jumbotron/>
        <Card/>
        </div>
        
        

    )
};
export default Home;