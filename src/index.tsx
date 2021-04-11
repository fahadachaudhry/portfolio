// eslint-disable-next-line no-use-before-define
import React from 'react';
import ReactDOM from 'react-dom';
import Background from './components/background';
import Experiences from './components/experience';
import Intro from './components/intro';
import Projects from './components/projects';
import Skills from './components/skills';

import './styles/styles.scss';

ReactDOM.render(
  <React.StrictMode>
    <Intro />
    <Background />
    <Skills />
    <Experiences />
    <Projects />
  </React.StrictMode>,
  document.getElementById('root'),
);
