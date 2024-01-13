import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className='Contact'>
      <h1>Lets Connect</h1>
      <form
        className='form'
        action="https://formspree.io/f/xgegvawz"
        method="POST"
      >
        <div className="input-group">
          <label className="label">Name:</label>
          <input type="text" name="Name" required />
        </div>

        <div className="input-group">
          <label className="label">Email:</label>
          <input type="email" name="Email" required />
        </div>

        <div className="message">
          <label className="label">Message:</label>
          <textarea name="message" required></textarea>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
