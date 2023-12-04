import { Image, ListGroup, OverlayTrigger, Tooltip } from "react-bootstrap";
import SubHeader from "../../../../components/SubHeader";
import "./SkillsList.css";

const SkillsList = ({ title, listItems }) => {
  const tooltip = "Click icons to explore more.";
  return (
    <div className="skills-list">
      <SubHeader>{title}</SubHeader>
      <OverlayTrigger
        placement="top-start"
        delay={{ show: 250, hide: 250 }}
        overlay={<Tooltip id={`${title}-tooltip`}>{tooltip}</Tooltip>}
      >
        <ListGroup className="skills-list-group">
          {listItems.map((item) => (
            <ListGroup.Item>
              <a href={item.link} target="_blank" rel="noreferrer">
                <Image src={item.logo} />
              </a>
              {item.content}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </OverlayTrigger>
    </div>
  );
};

export default SkillsList;
