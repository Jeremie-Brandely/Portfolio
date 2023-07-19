import React from 'react';
import data from "../data/data.json"
import "../style/Works.css"


const Projets = () => {
  const projets = data.projets;
  return (
    <div id="ancre-t">
    <div id={projets.title} className="projets">
      <h2 className="projets_title">{projets.title}</h2>
      <div className="projets_menu">
        <ul>
          {projets.projets.map((item) => (
            <li key={item.title} className="projet_all">
              <div className="infos_projets">
                <h3 className="title_projet">
                  {item.title}
                </h3>
                <p className="desc_projet">
                  {item.description}
                </p>
                <div className='image_projet'>
                  <img src={item.images} alt="projet accueil"></img>
                </div>
                <div className="liens">
                  <div className="link_projet">
                    <a href={item.url} target="_blank" rel="noreferrer">
                      <div className="bg-white">
                        <span className="span_projet">
                          Voir le projet
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="link_g">
                    <a href={item.github} target="_blank" rel="noreferrer">                      
                      <span className="link_github">
                        Voir le code du projet
                      </span>
                    </a>
                   
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
    </div>
  );
};

export default Projets;