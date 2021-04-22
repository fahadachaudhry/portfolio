const mainColors = {
  primary: '#774CC2',
  secondary: '#513485',
  dark: '#291A42',
  alternate: '#8051D2',
  temp: '#',
  // --------------------------------------------
  light: '#FFFFFF',
  selection: '#FFDC00',
  lightGray: '#f0f0f0',
  gray: '#808080',
};

const lightThemeColors = {
  particles: mainColors.dark,
  'card-border': '#8080805F',
  'selection-color': mainColors.dark,
  'body-color': mainColors.dark,
  'body-background-color': mainColors.light,
};
const darkThemeColors = {
  particles: mainColors.lightGray,
  'card-border': '#8080805F',
  'selection-color': mainColors.dark,
  'body-color': mainColors.light,
  'body-background-color': mainColors.dark,
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
};
