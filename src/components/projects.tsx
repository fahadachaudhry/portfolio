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
              <div className="d-flex align-items-center justify-content-between">
                <h6 className="text-bold">{item.name}</h6>
                <ul className="project-tags">
                  {item.tags.map((tag, index) => (
                    <li>
                      {tag}
                      {index !== item.tags.length - 1 ? ', ' : ''}
                    </li>
                  ))}
                </ul>
              </div>
              {item.companyName !== ''
              && <p>{item.companyName}</p>}
              {item.description.map((desc) => (<p>{desc}</p>))}
              {item.url !== ''
              && (
                <a target="_blank" href={item.url} className="btn-custom" rel="noreferrer">
                  Visit
                </a>
              )}
            </div>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default Projects;
