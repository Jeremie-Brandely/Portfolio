import React from 'react';
import "../style/Footer.css"
import git from "../images/github.png";
import linkedin from "../images/linkedin.png"

const Footer = () => {
    return (
        <footer>
            <div className='footimg'>
                <img src={git} alt='github logo' />
                <img src={linkedin} alt="linkedin logo" />
            </div>
            <div className='footp'>
                <p>Réalisé par Jérémie Brandely</p>
            </div>
        </footer>
    );
};

export default Footer;