/* eslint-disable no-use-before-define */
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import getProfileData from '../data/data';

const Certifications = () => {
  const profileData = getProfileData();
  return (
    <Container className="pt-5 pb-5">
      <Row>
        <Col md={2} className="main-heading"><h5>Certifications</h5></Col>
        <Col md={10}>
          {profileData.certifications?.map((item) => (
            <div className="pb-4">
              <div className="d-flex align-items-center justify-content-between pb-2">
                <h6 className="text-bold">{item.name}</h6>
                <span>
                  {item.issuedBy}
                </span>
              </div>
              <a target="_blank" href={item.verificationURL} className="btn-custom" rel="noreferrer">See Credentials</a>
            </div>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default Certifications;
