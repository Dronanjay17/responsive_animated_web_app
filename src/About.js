import React from "react";

import about from "../src/image/about.jpg"
import Common from "./Common";

const About = () => {
    return (
        <>
           <Common
            name="Welcome to About page"
           visit="/contact"
           btnName="Contact Us"
           imgSrc={about}
           />
        </>
    );
};

export default About;