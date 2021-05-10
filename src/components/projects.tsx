/* eslint-disable no-use-before-define */
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Masonry from 'react-masonry-css';
import getProfileData, { IProject } from '../data/data';

const Projects = () => {
  const profileData = getProfileData();
  return (
    <Container className="pt-5 pb-5">
      <Row>
        <Col md={2} className="main-heading"><h5 className="text-bold">Other Projects</h5></Col>
        <Col md={10}>
          <Masonry
            breakpointCols={{
              default: 2,
              1100: 1,
              700: 1,
              500: 1,
            }}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {profileData.projects?.map((item) => (
              <ProjectCard cardData={item} />
            ))}
          </Masonry>
        </Col>
      </Row>
    </Container>
  );
};

const ProjectCard = (props:{cardData:IProject}) => {
  const {
    cardData,
  } = props;
  return (
    <div>
      <div className="project-image" style={{ backgroundImage: `url(${cardData.imageUrl})` }} />
      <div className="p-4">
        <div className="pb-3">
          <h6 className="text-bold pb-2">{cardData.name}</h6>
          {cardData.url !== ''
        && (
          <a target="_blank" href={cardData.url} className="btn-custom btn-custom-light" rel="noreferrer">
            Visit
          </a>
        )}
        </div>
        {cardData.companyName !== ''
&& <p>{cardData.companyName}</p>}
        {cardData.description.map((desc) => (<p>{desc}</p>))}
        <div className="d-flex align-items-center justify-content-between">
          <ul className="project-tags">
            {cardData.tags.map((tag) => (
              <li>
                #
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Projects;
