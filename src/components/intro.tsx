/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
import React, { useCallback } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import type { Container as particlesContainer, Engine } from 'tsparticles-engine';
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';
import avatar from '../assets/images/avatar.jpeg';
import getProfileData from '../data/data';
import Testimonial from './Testimonial';
import colorStore from '../utils/color-constants';

interface IIntroProps{
  isDarkThemeEnabled: boolean;
}

const Intro = (props:IIntroProps) => {
  const { isDarkThemeEnabled } = props;
  const profileData = getProfileData();
  const themedColors = colorStore.getThemedColors(isDarkThemeEnabled);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: particlesContainer | undefined) => {
    await console.log(container);
  }, []);

  return (
    <Container fluid>
      <Row>
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            // background: {
            //   color: {
            //     value: '#0d47a1',
            //   },
            // },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: 'push',
                },
                onHover: {
                  enable: true,
                  mode: 'repulse',
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 2,
                },
              },
            },
            particles: {
              color: {
                value: themedColors.particles,
              },
              links: {
                color: themedColors.particles,
                distance: 150,
                enable: true,
                opacity: 0.3,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: 'none',
                enable: true,
                outModes: {
                  default: 'bounce',
                },
                random: false,
                speed: 2,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.3,
              },
              shape: {
                type: 'circle',
              },
              size: {
                value: { min: 1, max: 5 },
              },
            },
            detectRetina: true,
          }}
        />

        <Col>
          <Container className="height-100vh d-flex align-items-center intro pt-4 pb-4 position-relative">

            <Row className="align-items-center">
              <Col lg={3}>
                <img src={avatar} alt="avatar" className="shadow-lg rounded w-100" />
              </Col>
              <Col lg={6}>
                <div className="pt-5 pb-5">
                  <p className="pb-2">Hello! 👋🏼</p>
                  <p className="pb-2">
                    I&apos;m
                    {' '}
                    <span className="text-bold">{profileData.name}</span>
                    <br />
                    {profileData.intro}
                  </p>
                  <p className="intro-email">
                    Get in touch
                    {' 📧 '}
                    <a target="_blank" href={`mailto:${profileData.email}`} rel="noreferrer">
                      {profileData.email}
                    </a>
                  </p>
                </div>
              </Col>
              <Col lg={3}>
                <Testimonial />
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default Intro;
