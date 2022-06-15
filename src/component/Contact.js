import { useState } from "react";
function Contact() {
  const [message, showMessage] = useState(false);
  return (
    <div className="ContactContainer" id="ContactContainer">
      <div className="ContactUsWrapper">
        <div className="left">
          <img src="/assets/contactus.png" alt=""></img>
        </div>
        <div className="right">
          <h1>Contact Us</h1>
          <form
            className="ContactUsForm"
            onSubmit={(e) => {
              e.preventDefault();
              showMessage(true);
              setTimeout(() => {
                showMessage(false);
              }, 5000);
            }}
          >
            <input className="Email" type="text" placeholder="Email"></input>
            <input
              className="Message"
              type="textarea"
              placeholder="Message"
            ></input>
            <button className="SubmitButton" type="submit">
              Submit
            </button>
          </form>
          {message && <span> Reply to you ASAP :)</span>}
        </div>
      </div>
    </div>
  );
}

export default Contact;
