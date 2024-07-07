import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactMe(props) {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefalult();

    emailjs.sendForm("service_re7eevo", "template_zg1rdpw", form.current);
    e.target.reset();
  };

  return (
    <section
      className={props.bg ? "contSecW cSec" : "contSecB cSec"}
      id="ContactMe"
    >
      <h2 className="contTitle">
        {" "}
        <u>Contact Me</u>
      </h2>

      <div className="contContainer">
        <div className="contContent">
          <h3 className="contTitle">
            <u>Get in touch</u>
          </h3>
          <div className="contCont">
            <div className={props.bg ? "contInfoW" : "contInfoB"}>
              <div className="contCard">
                <h3 className="contCardTitle">
                  Email
                  <i class="uil uil-envelope-check contact__card-icon"></i>
                </h3>
                <div className="contNameDir">
                  <a
                    href="mailto:tejaspatange2025@gmail.com"
                    className="contBtn"
                    target="__blank"
                  >
                    <span className="contCardData">Reach out</span>
                    <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                  </a>
                </div>
              </div>
              <div className="contCard">
                <h3 className="contCardTitle">
                  Linkedin
                  <i class="uil uil-linkedin contact__card-icon"></i>
                </h3>
                <div className="contNameDir">
                  <a
                    href="linkedin.com/in/tejas-patange-bb700b229/"
                    className="contBtn"
                    target="__blank"
                  >
                    <span className="contCardData">Tejas Patange</span>
                    <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="contContent">
          <h3 className="contTitle"><u>Send a Message</u></h3>
          <div className="contCont">
            <form ref = {form} onSubmit={sendEmail} className="contForm" >
              <div className="contFormDiv" >
              <label className={props.bg ? 'contFormTagW' : 'contFormTagB'}>Name: </label>
                 <input 
                 type="text"
                 name="name"
                 className={props.bg?'contFormInW' : 'contFormInB'}
                 placeholder="Your Name"
                 />

              </div>

              <div className='contFormDiv'>
              <label className={props.bg?'contFormTagW':'contFormTagB'}>Mail: </label>
              <input 
               type="email" 
               name="email" 
               className={props.bg?"contFormInW":"contFormInB"} 
               placeholder="Your Mail"></input>
            </div>

            <div className='contFormDiv contFormArea'>
              <label className={props.bg?'contFormTagW':'contFormTagB'}>Message</label>
              <textarea 
              name="message" 
              cols="30" rows="10" 
              className={props.bg?"contFormInW":"contFormInB"} 
              placeholder='Your Message'></textarea>
            </div>

            <button className='formSubmit'>Send
            <i className="uil uil-message" ></i>
            </button>

            </form>

          </div>

        </div>
      </div>
    </section>
  );
}
