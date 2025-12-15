"use client";
import { useState } from "react";
import styles from "./ContactForm.module.css";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  /*
    handleChange : This updates the the variable formData every time the user types into a field.
    ... formData : This spreads the existing form data so you keep all previously typed values, 
    and overwrite the field that changed using dynamic key syntax (e.target.name)
    e : e is the event object from the input field 
    e.target.name : This refers to the name of the input field eg. 'name', 'email', 'message'.
    e.tagret.value : the current value in the input field 
    setFormData is the setter function for the fields. 
    
    Ex) form is : { name : 'John', email : 'John123@gmail.com', message : ''}

    User types 'hello' in the message field.

    e.target.name -> 'message'
    e.target.value -> 'hello'
    
    Then the new state becomes: 
    { name : 'John', email : 'John123@gmail.com', message : 'hello'}
    */
  /* [e.target.name] is in brackets because it is a dynamic key. Whichever input field we select
    becomes the key that will pair to the index/field we want to update. */

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(formData);
    const data = new FormData();
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("message", formData.message);
    for (let [key, value] of data.entries()) {
      console.log(`${key}: ${value}`);
    }

    console.log(`data : ${data}`);
    try {
      const res = await fetch("https://formspree.io/f/xblqljrq", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      const result = await res.json();
      setStatus(result.ok ? "Message sent!" : "Error sending message.");
    } catch (err) {
      setStatus("Submission failed.");
    }
  };

  return (
    <div id="contact" className={styles.ContactFormA}>
      <div className={styles.contactFormHeader}>
        <h1 className={styles.contactMeText}>Contact Me</h1>
        <p className={styles.contactMeInstructions}>
          Please contact me at myEmail@myemail.com or through this contact form.
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            required
          />
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your email"
            required
          />
          <textarea
            className={styles.textBox}
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your message"
            required
          />
          <button type="submit">Send</button>
          <p>{status}</p>
        </div>
      </form>
    </div>
  );
}
