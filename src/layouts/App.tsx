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
import colorStore from '../utils/theme';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/themed-styles.scss';
import '../styles/styles.scss';

function App() {
  // This hook defaults to the current mode of the system.
  const [darkTheme, setDarkTheme] = useState<boolean>(
    !!(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches),
  );
  const mainColors = colorStore.getMainColors();
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
  }, [darkTheme]);

  return (
    <>
      <div className="w-100 d-flex flex-row-reverse p-3">
        <h4 className="ml-2 dark-mode-switch-icons"><BiMoon /></h4>
        <Switch
          className="react-switch"
          onChange={() => {
            setDarkTheme(!darkTheme);
          }}
          checked={darkTheme}
          checkedIcon={false}
          uncheckedIcon={false}
          onColor={mainColors.secondary}
          offColor={mainColors.gray}
          onHandleColor={mainColors.light}
          offHandleColor={mainColors.light}
        />
        <h4 className="mr-2 dark-mode-switch-icons"><BiSun /></h4>
      </div>
      {/* <button type="button" onClick={() => setDarkTheme(!darkTheme)}>
        {darkTheme ? 'Light Theme' : 'Dark Theme'}
      </button> */}
      <Intro isDarkThemeEnabled={darkTheme} />
      <Background />
      <Certifications />
      <Skills />
      <Experiences />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
