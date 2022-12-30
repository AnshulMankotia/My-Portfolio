import React from "react";
import "./Contact.css";
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useState } from "react";
const Contact = () => {

    const form = useRef();
     
    const [done, setDone]=useState(false)

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_zmqy4rh', 'template_xo80vz5', form.current, 'fHGGVskWcQPrflRNr')
        .then((result) => {
            console.log(result.text);
            setDone(true)
        }, (error) => {
            console.log(error.text);
        });
    };


  return (
    <div className="contact-form">
{/* left side */}
      <div className="c-left">
        <div className="w-contact">
          <h1>Get in Touch</h1>
          <span>Contact me</span>
        </div>

        
        <div className="blur c-blur1" style={{ background: "#0bcff7" }}></div>
      </div>

{/* right side */}
       <div className="c-right">
        <form ref={form} onSubmit ={sendEmail}>
            <input type="text" name="user_name" className="'user" placeholder="Name"/>
            <input type="text" name="user_email" className="'user" placeholder="Email"/>
            <textarea name="message" className="user" placeholder="Message"></textarea>
            <input type="submit" value='Send' className="button" />
            <span>{done && "Thanks for Contacting me"}</span>
            <div className="blur c-blur2" style={{ background: "#8d2fc8" }}></div>
        </form>
       </div>

    </div>
  );
};

export default Contact;
