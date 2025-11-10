
'use client'
import { useState } from "react";
import styles from './ContactForm.module.css';

export default function ContactForm() { 
    const [formData, setFormData] = useState({name : '', email : '', message : ''});
    const [status, setStatus] = useState('');

    /*
    handleChange : This updates the the variable forData every time the user types into a field.
    ...formData : This spreads the existing form data so you keep all previously typed values, 
    and overwrites the field that changed using dynamic key syntax (e.target.name)
    e : e is the event object from the input field 
    e.target.name : This refers to the name of the input field eg. 'name', 'email', 'message'.
    e.tagret.value : the current value in the input field 
    setFormData is the setter function for the fields. 
    
    Ex) form is : { name : 'John', email : 'John123@gmail.com', message : ''}

    User types 'hello' in the message field.

    e.target.name -> 'message'
    e.target.value -> 'hello'
    
    Then the new state becomes: 
    { name : 'John', email : 'John123@gmail.com', message : ''}
    */
    const handleChange = e => {         
        setFormData({ ... formData, [e.target.name] : e.target.value})
    };

    const handleSubmit = async e => {
        e.preventDefault()
        const res = await fetch('/Destination', {
            method : 'POST',
            headers : { 'Content-Type' : 'application/json' },
            body : JSON.stringify(formData)
        });

        const result = await res.json();
        setStatus(result.success ? 'Message sent!' : 'Error sending message.');
    }

    return (
    
    <div className={styles.ContactFormA}>
        
        <div className={styles.contactFormHeader}>
            <h1 className={styles.contactMeText}>Contact Me</h1>
            <p className={styles.contactMeInstructions}>Please contact me at myEmail@myemail.com or through this contact form.</p>
        </div>
        <form onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
            <input name="name" placeholder="Your name" onChange={handleChange} required />
            <input name="email" type="email" placeholder="Your email" onChange={handleChange} required />
            <textarea className={styles.textBox} name="message" placeholder="Your message" onChange={handleChange} required />
            <button type="submit">Send</button>
            <p>{status}</p>
        </div>
        </form>
        
    </div>
  );

    
};

