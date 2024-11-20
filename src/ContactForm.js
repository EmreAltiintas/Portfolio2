import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './App.css';  // Hvis du har styling her
import { useEffect } from "react";

function ContactForm() {
    const [state, handleSubmit] = useForm("mjkvoawp"); // Formspree form ID
    
    // Brug useEffect for at vise alerten kun én gang, når state.succeeded ændrer sig
    useEffect(() => {
      if (state.succeeded) {
        alert("Din besked er blevet sendt!");
      }
    }, [state.succeeded]); // Effecten kører kun når state.succeeded ændres
  
    if (state.succeeded) {
      return <p className="form-success">Tak for din besked!</p>;
    }
  
    return (
      <form onSubmit={handleSubmit} className="contact-form">
        <label htmlFor="email" className="form-label">
          E-mail  
        </label>
        <input
          id="email"
          type="email"
          name="email"
          className="form-input"
        />
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
        />
        
        <label htmlFor="message" className="form-label">
          Besked
        </label>
        <textarea
          id="message"
          name="message"
          className="form-textarea"
        />
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
        />
        
        <button type="submit" disabled={state.submitting} className="form-button">
          Send
        </button>
      </form>
    );
  }

  export default ContactForm;