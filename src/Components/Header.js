import React from "react";
import Nav from "./Nav";
import "../style/Header.css";
import photo from "../images/imagepro.jpeg";
import { Icon } from "@iconify/react";

const Header = () => {

    return (
        
        <div className="header">
            <div className="logo">

            </div>
            <div className="navig">
            <Nav />
        </div>
        <div className="intro">
        <div className="titrehome">
        <h2>Jérémie Brandely</h2>
        </div>
        <div className="imagehome">
            <img src={photo} alt="photo_pres"/>
        </div>
        <div className="infohome">
        <h3>Developpeur Web | Fullstack</h3>
        </div>
        <div className="reseaux" >
            <div className="linklinkedin">
            <a href="https://www.linkedin.com/in/jbrandely" target="_blank" rel="noreferrer"><Icon icon="simple-icons:linkedin" color="black" width="50" /></a>
            </div>
            <div className="linkgithub"><a href="https://github.com/Jeremie-Brandely" target="_blank" rel="noreferrer"><Icon icon="devicon:github" color="black" width="50" /></a>
            </div>
        </div>

        
        </div>
        </div>
    );
};
export default Header