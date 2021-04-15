/* eslint-disable no-use-before-define */
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { GrGithub } from 'react-icons/gr';
import packageJSON from '../../package.json';
import getProfileData from '../data/data';

const Footer = () => {
  const profileData = getProfileData();
  return (
    <Container className="pb-4">
      <Row>
        <Col lg={8} className="text-bold footer-credits">
          <p>
            Designed and Developed by Shahzada Fahad 🤙🏼 2020
          </p>
        </Col>
        <Col lg={4} className="mb-2">
          <div className="footer-social-link">
            {profileData.socials?.map(
              (item) => (
                <a href={item.url} className="text-bold p-0" target="_blank" rel="noreferrer">{item.name}</a>
              ),
            )}
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="text-center">
          <a href="https://github.com/fahadachaudhry/portfolio" target="_blank" className="rounded d-inline-block m-0 p-1 footer-version" rel="noreferrer">
            <h4 className="d-inline-block pr-2">
              <GrGithub />
            </h4>
            v
            {packageJSON.version}
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
