import React, { useState } from "react";
import { Col, Nav, Row, Tab } from "react-bootstrap";
import clickAudio from "../../data/pen-click.wav";

import "./VerticalTabs.css";

const VerticalTabs = ({ tabs }) => {
  const tabTitles = tabs ? Object.keys(tabs) : [];
  const audio = new Audio(clickAudio);

  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (eventKey) => {
    if (eventKey !== activeTab) {
      audio.play();
      setActiveTab(eventKey);
    }
  };

  return (
    <Tab.Container defaultActiveKey={1} activeKey={activeTab}>
      <Row className="vertical-tabs-row">
        <Col sm={2}>
          <Nav variant="tabs" className="vertical-tabs">
            {tabTitles?.map((tabTitle) => (
              <Nav.Item>
                <Nav.Link
                  eventKey={tabTitles.indexOf(tabTitle) + 1}
                  onClick={() =>
                    handleTabClick(tabTitles.indexOf(tabTitle) + 1)
                  }
                >
                  {tabTitle}
                </Nav.Link>
              </Nav.Item>
            ))}
          </Nav>
        </Col>
        <Col>
          <Tab.Content>
            {tabTitles?.map((tabTitle) => (
              <Tab.Pane eventKey={tabTitles.indexOf(tabTitle) + 1}>
                {tabs[tabTitle]}
              </Tab.Pane>
            ))}
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
};

export default VerticalTabs;
