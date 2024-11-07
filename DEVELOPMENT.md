# STRUDEL Kit

STRUDEL Kit is a React-based JavaScript library for building scientific UIs based on the STRUDEL Design System and Task Flows. Visit [strudel.science](https://strudel.science) for more information about the STRUDEL project.

This library provides a suite of templates to implement UIs for various different task flows common to the scientific domain. The app is intended to be used as a starting point for building out a web app that includes one or more of the task flows provided.

## Getting Started

Clone the strudel-kit repository from github:

```
git clone git@github.com:strudel-science/strudel-kit.git
```

Install the dependencies:

```
npm install
```

Start up the app:

```
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the app in the browser.

Begin modifying the templates in `src/app`.

## Learn More

STRUDEL Kit is built on top of the Material UI (MUI) component library. [Read more about how to use MUI](https://mui.com/material-ui/getting-started/).

[strudel.science](https://strudel.science)

## Pre-commit Hooks

This project uses husky and lint-staged to run eslint and prettier on staged files when you run a commit using git.

If you encounter the error:

```
hint: The '.husky/pre-commit' hook was ignored because it's not set as executable.
```

You may need to modify the permissions to the husky directories on your machine:

```
chmod ug+x .husky/*
chmod ug+x .git/hooks/*
```
