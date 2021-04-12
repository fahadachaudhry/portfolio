/* eslint-disable no-use-before-define */
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import getProfileData from '../data/data';

const Experience = () => {
  const profileData = getProfileData();
  return (
    <Container className="pt-5 pb-5">
      <Row>
        <Col md={2} className="main-heading"><h5>Experience</h5></Col>
        <Col md={10}>
          {profileData.experiences?.map((item) => (
            <div className="pb-4">
              <div className="d-flex align-items-center justify-content-between">
                <h6 className="text-bold">{item.companyName}</h6>
                {/* <div>
                  <span>
                    {item.startDate}
                  </span>
                  {' - '}
                  <span>
                    {item.endDate}
                  </span>
                </div> */}
              </div>
              <p>{item.position}</p>
              <p>{item.summary}</p>
            </div>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default Experience;
