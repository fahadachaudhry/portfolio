<!-- ![Header](/src/assets/readme-assets/header-1.png?raw=true "Theming Colors") -->
<p align="center">
  <img style="width: 200px; margin: 0 auto;" src="./src/assets/readme-assets/header-2.svg?raw=true">
  <br/>
  <br/>
  <img src="https://img.shields.io/github/issues/fahadachaudhry/portfolio?style=flat-square">
  <img src="https://img.shields.io/github/forks/fahadachaudhry/portfolio?style=flat-square">
  <img src="https://img.shields.io/github/stars/fahadachaudhry/portfolio?style=flat-square">
</p>

## Motivation
I always found myself switching portfolios, tried tons of templates but nothing suited my style. Some lack theming options and others were just too hard to keep updated.

So as a frontend developer, why not solve it the way that fits better with what I am good at?

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