/* eslint-disable import/no-unresolved */
import Color from 'color';

const mainColors = {
  primary: '#EA2E49',
  selection: '#FFDCED',
  gray: '#808080',
  light: '#FFFFFF',
};

const generatedColors = {
  secondary: Color(mainColors.primary).lighten(0.3).alpha(0.5).toString(),
  dark: '#333745',
};

const lightThemeColors = {
  particles: mainColors.primary,
  'selection-color': generatedColors.dark,
  'body-color': generatedColors.dark,
  'body-background-color': mainColors.light,
};
const darkThemeColors = {
  particles: mainColors.primary,
  'selection-color': generatedColors.dark,
  'body-color': mainColors.light,
  'body-background-color': generatedColors.dark,
};

export default {
  getThemedColors(isDarkMode:boolean) {
    if (isDarkMode) {
      return darkThemeColors;
    }
    return lightThemeColors;
  },
  getMainColors() {
    return mainColors;
  },
  getGeneratedColors() {
    return generatedColors;
  },
};
