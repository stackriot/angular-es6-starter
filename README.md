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

### Development:
After the download go to the root directory where the `package.json` file is located and type:
```bash
npm run build     // generate the bundle file
npm run start     // launch the webpack development server with HMR e inline mode enabled
```
