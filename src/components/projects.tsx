/* eslint-disable no-use-before-define */
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import getProfileData from '../data/data';

const Projects = () => {
  const profileData = getProfileData();
  return (
    <Container className="pt-5 pb-5">
      <Row>
        <Col md={2} className="main-heading"><h5>Other Projects</h5></Col>
        <Col md={10}>
          {profileData.projects?.map((item) => (
            <div className="pb-4">
              <h6 className="text-bold">
                {item.name}
                <a href={item.url} className="p-2">👉🏼</a>
              </h6>
              <p>{item.description}</p>
              <ul className="project-tags">{item.tags.map((tag) => (<li>{tag}</li>))}</ul>
            </div>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default Projects;
