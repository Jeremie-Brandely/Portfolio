import React from "react";
import "../style/About.css"

const About = () => {
    return (
        <div id="ancre-a">
            <div className="logo-holder">
  <div className="bg"></div>
  <div className="bar"></div>
  <div className="bar fill1"></div>
  <div className="bar fill2"></div>
  <div className="bar fill3"></div>
  <div className="bar fill4"></div>
  <div className="bar fill1"></div>
  <div className="bar fill5"></div>
  <div className="bar fill6"></div>
  <div className="bar"></div>
</div>
            <div className="aboutinfos">
            <h2> A Propos </h2>

            <p> Après plusieurs années passées dans la vente et le commerce, j'ai décidé de m'orienter vers le métier de developpeur web. 
                J'ai toujours été attiré par les métiers informatiques, le developpement a toujours été un objectif. 
                J'ai donc suivi la formation dev webv d'openclassroom afin de travailler dans un univers plaisant, a la recherche de nouvelles compétences et d'adaptation. 
            </p>
            <div className="cv">
            <a href="cv_j_brandely.pdf" download="cv_j_brandely.pdf">Télécharger mon CV</a>
            </div>
                        
            </div>
            
        </div>
    );
};

export default About