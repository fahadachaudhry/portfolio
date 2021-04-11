/* eslint-disable no-use-before-define */
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import getProfileData from '../data/data';

const Background = () => {
  const profileData = getProfileData();
  return (
    <Container className="pt-5 pb-5">
      <Row>
        <Col lg={2} className="main-heading"><h5>Background</h5></Col>
        <Col>{profileData.bio.map((item) => (<p>{item}</p>))}</Col>
      </Row>
    </Container>
  );
};

export default Background;
