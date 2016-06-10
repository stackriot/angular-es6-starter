# angular-es6-starter
a simple Angular ES6 starter kit that uses Webpack and BabelJs

### Getting started:
Download or clone the repository, or use the npm (node package manager):

```bash
npm install angular-es6-starter
```

Install the dependencies and once is done, run the webpack-dev-server:

```bash
npm install
npm run start
```

Than visit the url: [http://localhost:8080/](http://localhost:8080/) and start to write your app!

---

### How does it work:
The starter project uses Webpack as bundler and development server and BabelJs as compiler for ES6, the main entry file is `src/app/app.js`, any changes made to it or the files required into it, will trigger the __Webpack's HMR__ (hot module replacement) that will rebuild the bundle file, serve it from memory and reload the page.

---

### What does include?
The starter includes some example of how you can use the items in the list below to begin your project without doubts.
* Controller(s): the controllers are build with the es6 **class** type.
* Service(s): the services are build with the es6 **class** type.
* Directive(s): the services are build by exporting a function. (**I can't do it with class**)
* Route(s): the config functions and route are build by exporting a function.
* Sub-Module(s): the sub modules, which contain all of the previous elements, are build with the es6 **class** type.

---

### Development:
After the download go to the root directory where the `package.json` file is located and type:
```bash
npm run build     // generate the bundle file
npm run start     // launch the webpack development server with HMR e inline mode enabled
```
