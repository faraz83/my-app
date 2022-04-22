import React, { useRef, useState } from "react";
import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import emailjs from '@emailjs/browser';

function Contact() {
  const formRef = useRef();
  const [done, setDone] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hdr6i0u",
        "template_loghcuq",
        formRef.current,
        "Fc0t7YfrpGRaGecLy"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss your project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +1 45981723
            </div>
            <div className="c-info-item">
              <img src={Email} alt="" className="c-icon" />
              Fz.kasiri@gmail.com
            </div>
            <div className="c-info-item">
              <img src={Address} alt="" className="c-icon" />
              Nort york, Toronto, Ontario, Canada
            </div>
          </div>
        </div>
        <div className="c-right">
          <div className="c-desc">
            <p>
              <b> Lorem ipsum dolor sit amet ? </b> consectetur adipisicing
              elit. Praesentium ducimus atque odit hic debitis.
            </p>
            <form ref={formRef} onSubmit={sendEmail}>
              <input type="text" placeholder="Name" name="user_name" />
              <input type="text" placeholder="Subject" name="user_subject" />
              <input type="email" placeholder="Email" name="user_email" />
              <textarea name="message" placeholder="Message" />
              <button type="submit">Submit</button>
              <div style={{paddingLeft:"10px", display:"inline-block"}}>
              {done && "thank you..."}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;