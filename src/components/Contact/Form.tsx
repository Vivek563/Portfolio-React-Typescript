import React from "react";

function Form() {
  const cols = 30;
  const rows = 5;
  return (
    <>
      <div className="container">
       
        <div className="contact-form-container">
          <form className="contact-form" name="contact" method="post">
          <input type="hidden" name="form-name" value="contact" />
            <span  className="form-header">Contact us</span>
            
            <input 
              type="text"
              className="email-input" 
              placeholder="Name" 
              id="name" 
              name="name" 
              required />
            <input 
              type="email" 
              id="email" 
              name="email"  
              className="email-input" 
              placeholder="Email" 
              required />
            <textarea cols={cols}
              rows={rows}
              id="message"
              name="message" 
              className="message"
              placeholder="Message..."
              required
            />
            <button className="submit" 
              type="submit" 
              value="Submit message">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Form;
