/* eslint-disable no-use-before-define */
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import QRCode from 'qrcode.react';
import getProfileData from '../data/data';

const Certifications = () => {
  const profileData = getProfileData();
  return (
    <Container className="pt-5 pb-5">
      <Row>
        <Col md={2} className="main-heading"><h5 className="text-bold">Certifications</h5></Col>
        {profileData.certifications?.map((item) => (
          <Col md={5} className="mb-4">
            <div className="certification-card">
              <div className="p-4 certification-card-shade">
                <div className="d-flex align-items-start justify-content-between">
                  <h5 className="certification-title text-bold pb-4 pr-3">{item.name}</h5>
                  <QRCode className="certification-qr-code" value={item.verificationURL} />
                </div>
                <div className="certification-details d-flex align-items-center justify-content-between flex-wrap">
                  <a target="_blank" href={item.verificationURL} className="certification-visit p-2 mr-2" rel="noreferrer">See Credentials</a>
                  <div className="pt-2">
                    {item.issuedBy}
                  </div>
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Certifications;
