/* eslint-disable no-use-before-define */
import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import getProfileData, { IExperience } from '../data/data';

const Experience = () => {
  const profileData = getProfileData();
  const [selectedExperience, updateSelectedExperience] = useState(0);
  return (
    <Container className="height-60vh d-flex align-items-center">
      <Row>
        <Col lg={2} className="main-heading"><h5 className="text-bold">Experience</h5></Col>
        <Col lg={2} className="main-heading">
          {profileData.experiences?.map((item, index) => (
            <button
              type="button"
              className={`experience-nav-button ${index === selectedExperience ? 'selected' : ''}`}
              onClick={() => {
                updateSelectedExperience(index);
              }}
            >
              {item.shortName}
            </button>
          ))}
        </Col>
        <Col lg={8}>
          {profileData.experiences?.map((item, index) => (
            <ExperienceCard cardData={item} isVisible={index === selectedExperience} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

const ExperienceCard = (props:{cardData:IExperience;isVisible:boolean}) => {
  const { cardData, isVisible } = props;
  if (!isVisible) {
    return <></>;
  }
  return (
    <div className="pb-4 pt-3">
      <h5 className="text-bold d-inline-block mr-1 pb-2">
        {cardData.position}
        <span className="color-primary">
          {' '}
          @
          {cardData.shortName}
        </span>
      </h5>
      {cardData.startDate !== ''
      && (
        <p>
          {cardData.startDate}
          {' '}
          {cardData.endDate !== '' && ` - ${cardData.endDate}`}
        </p>
      )}
      <ul className="pt-3">
        <li>
          {cardData.summary}
        </li>
      </ul>
    </div>
  );
};

export default Experience;
