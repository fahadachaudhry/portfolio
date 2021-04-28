/* eslint-disable no-use-before-define */
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Masonry from 'react-masonry-css';
import getProfileData, { IExperience } from '../data/data';

const Experience = () => {
  const profileData = getProfileData();
  return (
    <Container className="pt-5 pb-5">
      <Row>
        <Col md={2} className="main-heading"><h5 className="text-bold">Experience</h5></Col>
        <Col md={10}>
          <Masonry
            breakpointCols={{
              default: 3,
              1100: 2,
              700: 2,
              500: 1,
            }}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {profileData.experiences?.map((item) => (
              <ExperienceCard cardData={item} />
            ))}
          </Masonry>
        </Col>
      </Row>
    </Container>
  );
};

const ExperienceCard = (props:{cardData:IExperience}) => {
  const { cardData } = props;
  return (
    <div className="p-4">
      <h6 className="text-bold">{cardData.companyName}</h6>
      {/* <div>
      <span>
        {item.startDate}
      </span>
      {' - '}
      <span>
        {item.endDate}
      </span>
    </div> */}
      <p className="pb-4">{cardData.position}</p>
      <p className="m-0">{cardData.summary}</p>
    </div>
  );
};

export default Experience;
