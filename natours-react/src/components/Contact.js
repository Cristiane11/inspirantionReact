import React from 'react';
//import ReactDOM from 'react-dom';
import '../App.css';

function Contact() {
  return (
            <div>
                
                <section class="main-section">
                <h1>Contact</h1>

      <form id="contact-form">
        <ul>
          <li>
            <label for="name">Name</label>
            <input type="text" id="name" name="name" placeholder="John Smith" required="required"/>
          </li>
          <li>
            <label for="email">Email</label>
            <input type="email" id="email" name="email" placeholder="example@gmail.com" required="required"/>
          </li>
          <li>
            <label for="message">Message</label>
            <textarea id="message" name="message" required="required"></textarea>
          </li>
        </ul>
        <input type="submit"/>
      </form><section class="main-section">
      <h1>Contact</h1>

      <form id="contact-form">
        <ul>
          <li>
            <label for="name">Name</label>
            <input type="text" id="name" name="name" placeholder="John Smith" required="required"/>
          </li>
          <li>
            <label for="email">Email</label>
            <input type="email" id="email" name="email" placeholder="example@gmail.com" required="required"/>
          </li>
          <li>
            <label for="message">Message</label>
            <textarea id="message" name="message" required="required"></textarea>
          </li>
        </ul>
        <input type="submit"/>
      </form>

    </section>
  </section>
            </div>
  );
}

export default Contact;