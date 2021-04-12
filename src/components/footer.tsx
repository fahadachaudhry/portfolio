/* eslint-disable no-use-before-define */
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import getProfileData from '../data/data';

const Footer = () => {
  const profileData = getProfileData();
  return (
    <Container fluid className="p-5">
      <Row>
        <Col lg={6} className="mb-2">
          <p className="text-bold">
            Designed by
            {' '}
            <a href="https://github.com/bchiang7">Brittany Chiang</a>
            {' '}
            🤟🏼 2018
            <br />
            Ported to React and developed by Shahzada Fahad 🤙🏼 2020
          </p>
        </Col>
        <Col lg={6} className="mb-2">
          <ul className="float-right">
            {profileData.socials?.map((item) => (<li className="footer-link"><a href={item.url} className="text-bold" target="_blank" rel="noreferrer">{item.name}</a></li>))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
