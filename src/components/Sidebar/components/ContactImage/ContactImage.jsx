import { OverlayTrigger, Tooltip } from "react-bootstrap";

import "./ContactImage.css";

const ContactImage = ({ image, text, link, tooltip }) => {
  const renderTooltip = (props) => {
    return (
      <Tooltip id="contact-tooltip" {...props}>
        {tooltip}
      </Tooltip>
    );
  };

  return (
    <OverlayTrigger
      placement="right"
      delay={{ show: 250, hide: 400 }}
      overlay={tooltip ? renderTooltip : <div />}
    >
      <div className="contact-image-container">
        <img className="contact-image" src={image} alt="Loading" height={40} />
        {link ? (
          <a
            className="contact-details-text-link"
            href={link}
            target="_blank"
            rel="noreferrer"
          >
            {text}
          </a>
        ) : (
          <span className="contact-details-text">{text}</span>
        )}
      </div>
    </OverlayTrigger>
  );
};

export default ContactImage;
