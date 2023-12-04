import React from "react";
import { Col, Nav, Row, Tab } from "react-bootstrap";

import "./VerticalTabs.css";

const VerticalTabs = ({ tabs }) => {
  const tabTitles = tabs ? Object.keys(tabs) : [];
  return (
    <Tab.Container defaultActiveKey={1}>
      <Row className="vertical-tabs-row">
        <Col sm={2}>
          <Nav variant="tabs" className="vertical-tabs">
            {tabTitles?.map((tabTitle) => (
              <Nav.Item>
                <Nav.Link eventKey={tabTitles.indexOf(tabTitle) + 1}>
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
