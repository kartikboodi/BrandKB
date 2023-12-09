import { contactDetails } from "../../../../data/content";
import phone from "../../../../data/phone.gif";
import email from "../../../../data/email.gif";
import linkedIn from "../../../../data/linkedin-logo.svg";
import github from "../../../../data/github.gif";
import ContactImage from "../ContactImage/ContactImage";
import SubHeader from "../../../SubHeader";

import "./ContactDetails.css";

const ContactInfo = () => {
  const { emailId, phoneNumber, linkedInProfile, githubProfile } =
    contactDetails;

  return (
    <div className="contact-info">
      {/* <Header rank={HeaderRanks.FOURTH}>Contact Details</Header> */}
      <SubHeader>Contact Details</SubHeader>
      <ContactImage image={phone} text={phoneNumber} />
      <ContactImage
        image={email}
        text="Electronic mail"
        link={`mailto:${emailId}`}
        tooltip={emailId}
      />
      <ContactImage
        image={linkedIn}
        text="LinkedIn Profile"
        link={linkedInProfile}
      />
      <ContactImage image={github} text="GitHub" link={githubProfile} />
    </div>
  );
};

export default ContactInfo;
