# Download

Get started and download pre-compiled assets or start your own custom build with npm.

---

*	[Compiled CSS and JS](#compiled-css-and-js)
*	[Source files](#source-files)
*	[npm](#npm)
*	[Git](#git)

---

### Compiled CSS and JS

Download ready-to-use compiled assets for Frontbx to easily drop into your project.

<a target="blank" href="https://download-directory.github.io/?url=https%3A%2F%2Fgithub.com%2Ffrontbx%2Fui%2Ftree%2Fmain%2Fdist" class="btn btn-primary">Download</a>

---

### Source files

Compile Frontbx with your own asset pipeline by downloading the latest release.

<a href="https://github.com/frontbx/ui/archive/refs/heads/main.zip" target="_blank" class="btn btn-primary">Download Source</a>

After downloading, navigate  to your project directory and run the following command:

```bash
npm install frontbx
```

Next step, head over to the [Installation Page](../installation/index.html) for details on how to get started running your own build.

---

### npm

To get started with Frontbx via npm, ensure you have [node.js](https://nodejs.org/en) installed. Then navigate to your project directory and run the following command:

```bash
npm install frontbx
```

Frontbx JS can then be imported via CJS or ES6 with the following:

```javascript
// cjs
const frontbx = require('frontbx');

// ES6
import frontbx from 'frontbx';
```

Next step, head over to the [Installation Page](../installation/index.html) for details on how to get started running your own build.

---

### Git

Clone or fork the Frontbx framework with Git to create your own project. To clone the Frontbx repository `cd` to your project folder and run the following command:

```bash
git clone https://github.com/frontbx/ui.git ./
```

Alternatively, if you'd prefer to fork the Frontbx Github repository.

1.	On Github, [create a fork](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo) of the `frontbx/ui` repository.
2.	Clone your fork to your local machine using Github Desktop or Git.
3.	Using terminal, navigate to your fork's directory.
4.	Add a second remote to the original Frontbx repository.

```bash
git remote add upstream https://github.com/frontbx/ui.git
```

Your fork can then be easily be updated when a new version is released using the following command:

```bash
git fetch upstream
git checkout master
git merge upstream/master
```

Next step, head over to the [Installation Page](../installation/index.html) for details on how to get started running your own build.

After downloading, navigate  to your project directory and run the following command:

```bash
npm install frontbx
```