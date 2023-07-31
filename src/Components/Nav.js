import React from "react";
import "../style/Nav.css"

const Nav = () => {

    return (
        
        <div id="navigation">
			<a className="link-a" href="#ancre-a">A propos</a>
			<a className="link-s" href="#ancre-s">Compétences</a> 
			<a className="link-t" href="#ancre-t">Mes Travaux</a>
			<a className="link-c" href="#ancre-c">Contact</a> 
		</div>
		
    );
};
export default Nav