/* eslint-disable no-use-before-define */
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { GrGithub } from 'react-icons/gr';
import packageJSON from '../../package.json';
import getProfileData from '../data/data';

const Footer = () => {
  const profileData = getProfileData();
  return (
    <Container fluid className="pb-4">
      <Row>
        <Col lg={8} className="text-bold footer-credits">
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
        </Col>
        <Col lg={4} className="mb-2">
          <div className="footer-social-link">
            {profileData.socials?.map(
              (item) => (
                <a href={item.url} className="text-bold" target="_blank" rel="noreferrer">{item.name}</a>
              ),
            )}
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="text-center">
          <a href="https://github.com/fahadachaudhry/portfolio" target="_blank" className="p-1 rounded d-inline-block mb-1 footer-version" rel="noreferrer">
            <h3 className="d-inline-block pr-2">
              <GrGithub />
            </h3>
            v
            {packageJSON.version}
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
