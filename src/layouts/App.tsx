// eslint-disable-next-line no-use-before-define
import React, { useEffect, useState } from 'react';
import Switch from 'react-switch';
import { BiMoon, BiSun } from 'react-icons/bi';
import Background from '../components/background';
import Experiences from '../components/experience';
import Certifications from '../components/certifications';
import Intro from '../components/intro';
import Projects from '../components/projects';
import Skills from '../components/skills';
import Footer from '../components/footer';
import colorStore from '../utils/color-constants';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/styles.scss';
import SidebarNav from '../components/sidebarNav';
import WhatNext from '../components/WhatNext';

function App() {
  // This hook defaults to the current mode of the system.
  const [darkTheme, setDarkTheme] = useState<boolean>(
    !!(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches),
  );
  const mainColors = colorStore.getMainColors();
  const getGeneratedColors = colorStore.getGeneratedColors();
  const themedColors = colorStore.getThemedColors(darkTheme);

  const populateColorsFromThemes = (colors:any) => {
    const root = document.documentElement;
    const colorsKeys = Object.keys(colors);
    colorsKeys.forEach((color) => {
      root?.style.setProperty(`--${color}`, (colors as any)[color]);
    });
  };

  useEffect(() => {
    populateColorsFromThemes(mainColors);
    populateColorsFromThemes(themedColors);
    populateColorsFromThemes(getGeneratedColors);
  }, [darkTheme]);

  return (
    <>
      <SidebarNav />
      <div className="w-100 d-flex flex-row-reverse p-3">
        <h5 className="ml-2 dark-mode-switch-icons"><BiMoon /></h5>
        <Switch
          className="react-switch"
          onChange={() => {
            setDarkTheme(!darkTheme);
          }}
          checked={darkTheme}
          checkedIcon={false}
          uncheckedIcon={false}
          onColor={mainColors.primary}
          offColor={mainColors.gray}
          onHandleColor={mainColors.light}
          offHandleColor={mainColors.light}
        />
        <h5 className="mr-2 dark-mode-switch-icons"><BiSun /></h5>
      </div>
      <Intro
        isDarkThemeEnabled={darkTheme}
      />
      <Background />
      <Experiences />
      <Certifications />
      <Skills />
      <Projects />
      <WhatNext />
      <Footer />
    </>
  );
}

export default App;
