import React from "react";

import web from "../src/image/img1.jpg"
import Common from "./Common";

const Home = () => {
    return (
        <>
           <Common 
           name="Welcome to my Animated Website"
           visit="/service"
           btnName="Get Started"
           imgSrc={web}
           
           />
        </>
    );
};

export default Home;