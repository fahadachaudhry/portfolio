![Header](/src/assets/readme-assets/header-1.png?raw=true "Theming Colors")

# fahadachaudhry\portfolio 👋🏼

![issues](https://img.shields.io/github/issues/fahadachaudhry/portfolio?style=flat-square)
![forks](https://img.shields.io/github/forks/fahadachaudhry/portfolio?style=flat-square)
![stars](https://img.shields.io/github/stars/fahadachaudhry/portfolio?style=flat-square)


This Portfolio was created using ReactJS and React-Bootstrap.

## Getting Started
1. `npm install`
2. `npm start`

## Theming

### Steps to modify theme

1. Head over to `src\utils\color-constants.ts`

```javascript
const mainColors = {
  primary: '#EA2E49',
  selection: '#F6F792',
  dark: '#333745',
  lightGray: '#f0f0f0',
  gray: '#808080',
  light: '#FFFFFF',
};
```
2. Changing these colors 👆🏼 will take effect in the entire application.

### Steps to Configure Dark Mode

The application is now dark mode enabled. The colors can be set using the following steps:

1. Head over to `src\utils\color-constants.ts`

```javascript
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
```
2. Changing these colors 👆🏼 will reflect in the appropriate mode selected in the application.


## Steps to Modify Information

1. Head over to `src\data\data.ts`

```javascript
export interface IProfile{
  name: string;
  intro: string;
  skills?: ISkill;
  phone: string;
  email: string;
  socials: ISocial[];
  bio: string[];
  students?: IStudent[];
  experiences?: IExperience[];
  certifications?: ICertification[];
  projects?: IProject[];
  goodByeText: string;
}
```
2. The data being populated in the entire portfolio comes from this file. This file exports a JS Object which contains all the information required to populate each component. The object follows this structure. 👆🏼