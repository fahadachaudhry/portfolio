const mainColors = {
  primary: '#EA2E49',
  selection: '#F6F792',
  dark: '#333745',
  lightGray: '#f0f0f0',
  gray: '#808080',
  light: '#FFFFFF',
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
