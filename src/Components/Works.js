import React from 'react';
import data from "../data/data.json"
import "../style/Works.css"
import Collapse from './Collapse';




const Projets = () => {
  const projets = data.projets;
  
  return (
    

    <div id="ancre-t">

    <div id={projets.title} className="projets">
      <h2 className="projets_title">{projets.title}</h2>

      <div className="projets_menu">
        <ul>
          {projets.projets.map((projets) => (
            <li key={projets.title} className="projet_all">

              <div className="infos_projets">
                <Collapse title={projets.title} content={projets.description} img={projets.images} link={projets.url} git={projets.github} />
               
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