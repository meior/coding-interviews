# Coding Interviews
My solutions and test cases for programming practice in book Coding Interviews: Questions, Analysis & Solutions. It contains totally 66 questions, i will often update later. I programmed with JavaScript and run it on Node.js v6.10.2. `Mocha` provides unit testing to show whether or not answer is correct.

[![Build Status](https://travis-ci.org/boennemann/badges.svg?branch=master)](https://github.com/ylasyn/yixan)
[![Node.js](https://img.shields.io/badge/node-6.10.2-blue.svg)](https://github.com/nodejs/node)
[![Mocha](https://img.shields.io/badge/mocha-3.5.0-blue.svg)](https://www.mongodb.com/)
[![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.svg?v=102)](https://github.com/ylasyn/yixan)
[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=102)](https://opensource.org/licenses/mit-license.php)

## Installation
Download this project:
```bash
$ git clone git@github.com:meior/coding-interviews.git
```

Install dependencies:
```bash
$ cd coding-interviews
$ npm install
```

## Usage
Show categories and questions in project with this command:
```bash
$ npm start
```

This is the structure of project files:
- project
  - node_modules
  - utils
  - .eslintrc
  - .gitignore
  - index.js
  - package.json
  - README.md

The other folders are categories, there are several programming questions in them.You can find some files like these in questions folders:
- test
  - arraySearch.test.js(Mocha testing script)
  - data.js(test case)
- arraySearch.js(solution)
- README.md(question and analysis)

Test your code of solution by using Mocha script, you should install it globally:
```bash
$ npm install -g mocha
```

Run this command in questions folder:
```bash
$ mocha
```

Now, you can see how many test cases passed.
![mochaDemo](http://7xs1tt.com1.z0.glb.clouddn.com//coding-interviews/home/mochaDemo.PNG)