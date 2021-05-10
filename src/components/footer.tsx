/* eslint-disable no-use-before-define */
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { GrGithub } from 'react-icons/gr';
import packageJSON from '../../package.json';
import Socials from './socials';

const Footer = () => {
  return (
    <Container className="pb-4">
      <Row>
        <Col lg={12} className="text-center text-bold footer-credits">
          <p>
            Designed and Developed by Shahzada Fahad 🤙🏼 2020
          </p>
          <a href="https://github.com/fahadachaudhry/portfolio" target="_blank" className="d-inline-block footer-version" rel="noreferrer">
            <h4 className="d-inline-block pr-2">
              <GrGithub />
            </h4>
            v
            {packageJSON.version}
          </a>
        </Col>
        <Col lg={12} className="footer-socials align-items-center justify-content-center pb-4">
          <Socials margins={[0, 10, 0, 0]} />
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
