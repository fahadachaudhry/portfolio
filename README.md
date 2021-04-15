# fahadachaudhry\portfolio 👋🏼

![issues](https://img.shields.io/github/issues/fahadachaudhry/portfolio?style=flat-square)
![forks](https://img.shields.io/github/forks/fahadachaudhry/portfolio?style=flat-square)
![stars](https://img.shields.io/github/stars/fahadachaudhry/portfolio?style=flat-square)


This Portfolio was created using ReactJS and React-Bootstrap.

## Dependencies
- react
- react-bootstrap
- node-sass
- typescript

## Getting Started
1. `npm install`
2. `npm start`

## Theming

### Steps to modify theme

1. Head over to `src\utils\theme.ts`

![Theming Colors](/src/assets/readme-assets/theme-colors.png?raw=true "Theming Colors")

2. Changing these colors 👆🏼 will take effect in the entire application.

### Steps to Configure Dark Mode

The application is now dark mode enabled. The colors can be set using the following steps:

1. Head over to `src\utils\theme.ts`

![Dark Mode Configurations](/src/assets/readme-assets/dark-mode-config.png?raw=true "Theming Colors")

2. Changing these colors 👆🏼 will reflect in the appropriate mode selected in the application.


## Steps to Modify Information

1. Head over to `src\data\data.ts`

![Profile Data](/src/assets/readme-assets/profile-data.png?raw=true "Theming Colors")

2. The data being populated in the entire portfolio comes from this file. This file exports a JS Object which contains all the information required to populate each component. The object follows this interface. 👆🏼