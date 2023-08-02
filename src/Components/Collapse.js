import React from 'react';
import arrow from '../images/arrow.png';
import { useState } from 'react';
import "../style/Collapse.css"



const Collapse = ({title, content, img, git, link}) => {
    const [toggle, setToggle] = useState(false);



    return (
        
        <div className="collapse">
            <h3 className='collapse_title' onClick={() => setToggle(!toggle)} >
                    {title}
                    <img 
                        className={toggle ? 'arrow arrow-up' : 'arrow arrow-down'} 
                        src={arrow} 
                        alt="show content" 
                    />
                </h3>
                <div className={toggle ? 'collapse-content' : 'collapse-content-hidden'}>
                     {content}
                     
                <div className={toggle ? 'collapse-content' : 'collapse-content-hidden'}>
                    <img src={img} alt="accueil projet"/>  
                </div> 
     
                </div> 
                <div  className={toggle ? 'collapse-content' : 'collapse-content-hidden'}>
                   <a  href={git} target="_blank" rel="noreferrer">Voir le code du projet</a>
                </div> 
                <div className={toggle ? 'collapse-content' : 'collapse-content-hidden'}>
                <a className={link ? "lien-site" : "aucun-lien" } href={link} target="_blank" rel="noreferrer">Voir le projet</a>
                </div> 
                

        </div>
        
    );
};

export default Collapse;