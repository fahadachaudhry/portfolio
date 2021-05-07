/* eslint-disable max-len */
/* eslint-disable no-use-before-define */
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import getProfileData from '../data/data';

const WhatNext = () => {
  const profileData = getProfileData();
  return (
    <Container className="pt-5 pb-5">
      <Row>
        <Col className="height-60vh d-flex align-items-center">
          <div className="d-flex align-items-center flex-column">
            <h1 className="p-2">What&apos;s Next</h1>
            <p className="what-next-text p-4">{profileData.goodByeText}</p>
            <a className="p-3" target="_blank" href={`mailto:${profileData.email}`} rel="noreferrer">
              Say Hello
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default WhatNext;
