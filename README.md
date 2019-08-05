# UI_H5_Test
## About
UI Automation Test For H5 Page in Mobile Emulation

## Development best practices and design decisions
  * Use [WebdriverIO](https://webdriver.io/) to run UI Automation Test For H5 Page in Mobile Emulation
  * Use [Nodemailer](https://nodemailer.com/about/) to send email with reports
  * Use [gulp.js](https://gulpjs.com) to manage the tasks for development workflow

## Requirements
This project is developed for the v10 Node.js
[LTS release](https://github.com/nodejs/LTS), which is currently `v10.16.0`.
The latest version of `npm@6` is also recommended.

## Setting up your environment

### Obtain source code

```sh
# Clone `UI_H5_Test` to your local machine
> git clone git@github.com:flyHe/UI_H5_Test.git
```
### Install dependencies

```sh
# step into local repo
> cd UI_H5_Test
# (Optional) Install chromedriver manually if can not download from google
> npm install chromedriver --chromedriver_cdnurl=https://npm.taobao.org/mirrors/chromedriver
# install dependencies
> npm i
```

>Note: If you receive an error similar to `npm: command not found`, it indicates you need to install Node.js first. Install it from [https://nodejs.org](https://nodejs.org) and npm will be installed with Node.js.
>



## Running the test

We can run the Monitors in both local and new relic Synthetics

#### Running the test in local without email sending

```sh
> npm run test:{name}:local
# Sample: npm run test:search:local
```

#### Running the Monitor with email sending


```sh
> npm run test:{name}
# Sample: npm run test:search
```

## Custom your own test cases
1. Add your own npm cmd like ["test:{name}": "gulp test:e2e --tags '@{Name}'"](https://github.com/flyHe/UI_H5_Test/blob/master/package.json#L7) in [package.json](https://github.com/flyHe/UI_H5_Test/blob/master/package.json)
2. Add your own feature file in [features](https://github.com/flyHe/UI_H5_Test/blob/master/tests/features) or overwrite feature file [search.feature](https://github.com/flyHe/UI_H5_Test/blob/master/tests/features/search.feature)
3. Add your own steps and pages in folder [pages](https://github.com/flyHe/UI_H5_Test/tree/master/tests/pages) and [steps](https://github.com/flyHe/UI_H5_Test/tree/master/tests/steps)
