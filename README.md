# ReactJS new way

Frontend application for [rails-new-way](https://github.com/KamilLelonek/rails-new-way) API.

## Prerequisites

Makre sure you have [NodeJS](https://nodejs.org/download/) installed.

## Installation

To install all of required dependecies run:

    ./scripts/setup.sh

## Run

Start the local dev server:

    foreman start

Navigate to **http://localhost:8080/** to view the app.

## Tests

Tests leverage [Karma](http://karma-runner.github.io/0.12/index.html) to run through the test suite using [PhantomJS](http://phantomjs.org/) and generate code coverage reports.

    npm test

**Input:** `test/main.js`

**Output:** `coverage/`

## Production

To build minified production app run:

    npm run build

**Input:** `src/main.jsx`

**Output:** `build/app.js`

## Clean

To remove generated `build/app.js` run:

    npm run clean

# Demo

Website is available under:

http://squixy.zz.mu/react-new-way
