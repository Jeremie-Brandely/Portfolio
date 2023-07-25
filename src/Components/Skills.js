import React from "react";
import { Icon } from "@iconify/react";
import "../style/Skills.css"



const Skills = () => {
    return(
        <div id="ancre-s">
            <h2>Compétences</h2>
            <div className="logos">
                <div className="html">
            <Icon icon="logos:html-5" width="50" /> <p>HTML5</p>
            </div>
            <div className="css">
            <Icon icon="logos:css-3" width="50"  /> <p>CSS3</p> 
            </div>
            <div className="javascript">
            <Icon icon="vscode-icons:file-type-js" width="50"  /> <p>Javascript</p>
            </div>
            <div className="github">
            <Icon icon="fa6-brands:github" color="white" width="50" /> <p>Github</p> 
            </div>
            <div className="react">
            <Icon icon="skill-icons:react-dark" width="50" /> <p>React</p>
            </div>
            <div className="figma">
            <Icon icon="skill-icons:figma-light" width="50"  /> <p>Figma</p>
            </div>

            </div>
        </div>
    )
}

export default Skills