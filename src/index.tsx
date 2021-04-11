// eslint-disable-next-line no-use-before-define
import React from 'react';
import ReactDOM from 'react-dom';
import Particles from 'react-particles-js';
import Background from './components/background';
import Experiences from './components/experience';
import Intro from './components/intro';
import Projects from './components/projects';
import Skills from './components/skills';

import './styles/styles.scss';

ReactDOM.render(
  <React.StrictMode>
    <Particles
      params={{
        particles: {
          color: {
            value: '#a0a0a0',
          },
          lineLinked: {
            enable: true,
            color: {
              value: '#a0a0a0',
            },
          },
          number: {
            value: 50,
          },
          size: {
            value: 3,
          },
        },
      }}
      className="position-fixed w-100 h-100"
    />
    <Intro />
    <Background />
    <Skills />
    <Experiences />
    <Projects />
  </React.StrictMode>,
  document.getElementById('root'),
);
