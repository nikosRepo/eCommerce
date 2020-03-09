import React from "react";

import "./contact.scss";

import { ReactComponent as GitIcon } from "../../assets/github-logo.svg";
import { ReactComponent as LinkedInIcon } from "../../assets/linkedin.svg";
import { ReactComponent as MailIcon } from "../../assets/mail.svg";

const ContactPage = () => (
  <div className="contactpage">
    <h2>
      Hello! My name is Nikos Repousis, and I'm an Athens based Frontend
      Developer.
    </h2>
    <span className="subtitle">
      Focused on crafting clean & user-friendly expreriences.
    </span>
    <p className="text">
      The site that you currently exploring has been totally created with
      <b> React.js</b>. Some of the technologies that I used in this project are
      <b> Redux, Redux-Saga & React Hooks</b>. The whole project styling is
      based on <b> SASS</b> and <b> Styled-components</b>, of course, we talk
      about a <u>fully mobile responsive website</u>. As you can see in the
      Sign-in page you have the option to sign in with your email or via your
      Google account. This option come through <b>Firebase</b> tool where also
      store authenticated users and shop data's in JSON form. Last but not least
      you can easily proceed to a virtual payment by using a fake card provided
      by
      <b> Stripes API</b> for the purpose of this e-shop.
    </p>
    <div className="contactdetails">
      <div className="option">
        <LinkedInIcon className="git-icon" />
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.linkedin.com/in/nikos-repousis/"
        >
          linkedin/in/nikos-repousis
        </a>
      </div>
      <div className="option">
        <GitIcon className="git-icon" />
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://github.com/nikosRepo"
        >
          github.com/nikosRepo
        </a>
      </div>
      <div className="option">
        <MailIcon className="git-icon" />
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="mailto: nikosrep@gmail.com"
        >
          nikosrep@gmail.com
        </a>
      </div>
    </div>
  </div>
);

export default ContactPage;
