// eslint-disable-next-line no-use-before-define
import React from 'react';
import ReactDOM from 'react-dom';
import Background from './components/background';
import Experiences from './components/experience';
import Certifications from './components/certifications';
import Intro from './components/intro';
import Projects from './components/projects';
import Skills from './components/skills';
import Footer from './components/footer';

import './styles/styles.scss';

ReactDOM.render(
  <React.StrictMode>
    <Intro />
    <Background />
    <Certifications />
    <Skills />
    <Experiences />
    <Projects />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root'),
);
