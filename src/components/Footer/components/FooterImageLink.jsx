import { OverlayTrigger, Tooltip } from "react-bootstrap";

import "./FooterImageLink.css";

const FooterImageLink = ({ image, text, link, tooltip }) => {
  const renderTooltip = (props) => {
    return (
      <Tooltip id="footer-tooltip" {...props}>
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
      <div className="FooterImageLink">
        <img className="FooterImage" src={image} alt="Loading" height={40} />
        {link ? (
          <a
            className="FooterText-link"
            href={link}
            target="_blank"
            rel="noreferrer"
          >
            {text}
          </a>
        ) : (
          <span className="FooterText">{text}</span>
        )}
      </div>
    </OverlayTrigger>
  );
};

export default FooterImageLink;
