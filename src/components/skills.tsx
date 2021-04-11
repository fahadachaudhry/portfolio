/* eslint-disable no-use-before-define */
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import getProfileData from '../data/data';

const Skills = () => {
  const profileData = getProfileData();
  return (
    <Container className="pt-5 pb-5">
      <Row>
        <Col lg={2} className="main-heading"><h5>Skills</h5></Col>
        <Col>
          <h6 className="pb-4 text-bold">LANGUAGES</h6>
          <ul>
            {profileData.skills?.languages.map((item) => (<li>{item}</li>))}
          </ul>
        </Col>
        <Col>
          <h6 className="pb-4 text-bold">FRAMEWORKS</h6>
          <ul>
            {profileData.skills?.frameworks.map((item) => (<li>{item}</li>))}
          </ul>
        </Col>
        <Col>
          <h6 className="pb-4 text-bold">TOOLS</h6>
          <ul>
            {profileData.skills?.tools.map((item) => (<li>{item}</li>))}
          </ul>
        </Col>
        <Col>
          <h6 className="pb-4 text-bold">DESIGN</h6>
          <ul>
            {profileData.skills?.design.map((item) => (<li>{item}</li>))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Skills;
