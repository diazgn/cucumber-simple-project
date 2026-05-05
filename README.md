# cucumber-simple-project

A simple Cucumber.js BDD project.

## Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm (bundled with Node.js)

## Installation

```bash
# Clone the repository
git clone https://github.com/diazgn/cucumber-simple-project.git
cd cucumber-simple-project

# Install dependencies
npm install
```

## Running Tests

```bash
# Run all scenarios
npm test
```

### Run by tag

```bash
# Only scenarios with specific tag
npx cucumber-js --tags @SimpleAssertions
```

## Reports

After each run, an HTML report is generated at:

```
reports/cucumber-report.html
```

Open it in a browser to view detailed test results.

