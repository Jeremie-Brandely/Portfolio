import React from "react";
import "../style/Contact.css"

const Contact = () => {
    return(
        <div id="ancre-c">
            <div className="Contacter">
            <h3>Me contacter</h3>
            <p>N'hesitez pas a me contacter par mail ou via ce formulaire</p>
            </div>
            <div className="formulaire">
                <form class="form" action="#contact" method="post" id="form" name="sendmail">
                    <div className="name">
                        <label>Nom</label>
                        <input type="text" name="name" id="name" placeholder="Nom" />
                    </div>
                    <div className="email">
                    <label>Email</label>
                    <input type="text" name="email" id="email" placeholder="Email" />
                    </div>
                    <div className="message">
                        <label>Message</label>
                        <input type="text" name="message" id="message" placeholder="Votre Message"/>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default Contact;