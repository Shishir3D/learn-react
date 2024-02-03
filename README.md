# [My React App](https://shishir3d.github.io/learn-react/)

# This documents my learning from youtube

Link to the tutorial that I am following :
[Programming with Mosh](https://www.youtube.com/watch?v=SqcY0GlETPk)

## Steps to use react :

1. Install node `sudo apt install nodejs`
2. Install npm `sudo apt install npm`
3. Install vite with `npm create vite@latest`

> Vite is an alternative of the official tool **Create React App** (CRA)

Now you will be asked to enter the project name :

> This creates a vite project with react as a framework
> It sets up all the necessary dependencies

4. Enter the project name `learn-react`
5. Select `react` as the framework
6. select `TypeScript` as the language

## Congrats you have sucessfully created a react app :tada:

> This will install all the dependencies and run the webserver

7. Enter `npm install` after **cd** into `./learn-react`
8. Enter `npm run dev` to launch the web server

## What is in the vite project ?

- **node_modules** : This contains all the the third party libraries like **react**
- **public** : This contains all the public assests of the website like images, videos, audios, etc
- **src** : This contains **source code** of the react application
- **package.jason** : This contains the information of the project, dependencies
- **tsconfig.jason** : This contains code that tells the TypeScript **compiler** how to compile the code to JavaScript
- **vite.config.ts** : This is the configuration file for vite

# Make your first react component

> extension for TypeScript files is .tx and .tsx
> Common convention is to use .tx for plain TypeScript files and .tsx for react components

### Use PascalCasing

In react one component (any .tsx file) cannot return more than one element (html tags)

We have two ways to fix it :

1. Wrap all the elements inside a div
2. Use fragments

.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>

<hr>

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
