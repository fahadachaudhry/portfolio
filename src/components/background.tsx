/* eslint-disable no-use-before-define */
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im';
import getProfileData from '../data/data';

const Background = () => {
  const profileData = getProfileData();
  return (
    <Container className="pt-5 pb-5">
      <Row>
        <Col className="height-100vh d-flex align-items-center">
          <div>
            <span className="position-absolute background-quote start"><ImQuotesLeft /></span>
            {profileData.bio.map((item) => (<p className="background-text">{item}</p>))}
            <span className="position-absolute background-quote end"><ImQuotesRight /></span>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Background;
