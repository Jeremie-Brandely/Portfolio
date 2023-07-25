import React from "react";
import "../style/Contact.css"

import Form from "./Form";

const Contact = () => {
    return(
        <div id="ancre-c">
            <div className="Contacter">
            <h2>Me contacter</h2>
            <p>N'hesitez pas a m'envoyer un mail via ce formulaire :</p>
           
            </div>
            <div className="formulaire">
                <Form />

            </div>
        </div>
    )
}

export default Contact;