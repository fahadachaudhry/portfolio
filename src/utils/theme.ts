const mainColors = {
  primary: '#6952C4',
  secondary: '#584A8F',
  light: '#FFFFFF',
  dark: '#373442',
  selection: '#FFDC00',
  lightGray: '#f0f0f0',
  gray: '#808080',
};

const lightThemeColors = {
  particles: mainColors.dark,
  'selection-color': mainColors.dark,
  'body-color': mainColors.dark,
  'body-background-color': mainColors.light,
};
const darkThemeColors = {
  particles: mainColors.lightGray,
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
