/* eslint-disable no-use-before-define */
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import getProfileData from '../data/data';

const Footer = () => {
  const profileData = getProfileData();
  return (
    <Container fluid className="pb-4">
      <Row>
        <Col lg={6} className="text-bold footer-credits">
          <p className="p-0 m-0 mb-1">
            Designed by
            {' '}
            <a href="https://github.com/bchiang7">Brittany Chiang</a>
            {' '}
            🤟🏼 2018
            <br />
          </p>
          <p className="p-0 m-0 mb-1">
            Ported to React and developed by Shahzada Fahad 🤙🏼 2020
          </p>
          <span className="background-color-dark color-light p-1 rounded d-inline-block mb-1">
            v
            {process.version}
          </span>
        </Col>
        <Col lg={6} className="mb-2">
          <ul className="float-lg-right">
            {profileData.socials?.map(
              (item, index) => (
                <li className={`footer-link ${index !== profileData.socials?.length - 1 ? 'mr-3' : ''}`}>
                  <a href={item.url} className="text-bold" target="_blank" rel="noreferrer">{item.name}</a>
                </li>
              ),
            )}
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
