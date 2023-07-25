import React from 'react';
import "../style/Footer.css"
import { Icon } from "@iconify/react";

const Footer = () => {
    return (
        <footer>
            <div className='footimg'>
            <Icon icon="fa6-brands:github" color="#d7caaa" width="50"  />
            <Icon icon="raphael:linkedin" color="#d7caaa" width="50"  />
            </div>
            <div className='footp'>
                <p>Réalisé par Jérémie Brandely</p>
            </div>
        </footer>
    );
};

export default Footer;