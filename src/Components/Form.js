import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../style/Form.css"

export const Form = () => {
  
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_jx4r5lb", "template_rxmhy9l", form.current, "K4q5w2oCoG-zlSV8L").then(
      (result) => {
        alert("Message envoyé");
        console.log(result.text);
      },
      (error) => {
        alert("Erreur dans l'envoi");
        console.log(error.text);
      }
    );
  };

  return (
    <div className="form_all">
      <form ref={form} onSubmit={sendEmail} >
        <label>Nom</label>
        <input type="text" name="name" />
        <label>Email</label>
        <input type="email" name="email" />
        <label>Message</label>
        <textarea name="message" />
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
};

export default Form;