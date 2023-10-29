import Layout from "../Layout";
import linkedIn from "../../data/linkedin-logo.svg";
import github from "../../data/github.gif";
import email from "../../data/email.gif";
import phone from "../../data/phone.gif";
import FooterImageLink from "./components/FooterImageLink";
import { contactDetails } from "../../data/Constants";

import "./Footer.css";

const Footer = () => {
  const { emailId, phoneNumber, linkedInProfile, githubProfile } =
    contactDetails;
  return (
    <footer className="Footer">
      <Layout>
        <div className="Footer-content">
          <FooterImageLink image={phone} text={phoneNumber} />
          <FooterImageLink
            image={email}
            text="Electronic mail"
            link={`mailto:${emailId}`}
            tooltip={emailId}
          />
        </div>
        <div className="Footer-content">
          <FooterImageLink
            image={linkedIn}
            text="LinkedIn Profile"
            link={linkedInProfile}
          />
          <FooterImageLink image={github} text="GitHub" link={githubProfile} />
        </div>
      </Layout>
    </footer>
  );
};

export default Footer;
