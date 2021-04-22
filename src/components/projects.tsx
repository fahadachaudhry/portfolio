/* eslint-disable no-use-before-define */
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Masonry from 'react-masonry-css';
import getProfileData from '../data/data';

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
              1100: 2,
              700: 2,
              500: 1,
            }}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {profileData.projects?.map((item) => (
              <div className="p-4">
                <div className="project-image" style={{ backgroundImage: `url(${item.imageUrl})` }} />
                <div className="d-flex align-items-baseline justify-content-between pb-3">
                  <h6 className="text-bold">{item.name}</h6>
                  {item.url !== ''
                      && (
                        <a target="_blank" href={item.url} className="btn-custom btn-custom-success ml-2" rel="noreferrer">
                          Visit
                        </a>
                      )}
                </div>
                {item.companyName !== ''
              && <p>{item.companyName}</p>}
                {item.description.map((desc) => (<p>{desc}</p>))}
                <div className="d-flex align-items-center justify-content-between">
                  <ul className="project-tags">
                    {item.tags.map((tag) => (
                      <li>
                        #
                        {tag}
                        {/* {index !== item.tags.length - 1 ? ', ' : ''} */}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </Masonry>
        </Col>
      </Row>
    </Container>
  );
};

export default Projects;
