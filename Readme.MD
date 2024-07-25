
# Playwright Assignment

This assignment demonstrates how to create UI and API tests using Playwright and JavaScript, following the Page Object Model (POM) framework. The project includes instructions for setting up and executing the tests.

## Project Structure

```
searchStaxAssignment/
├── .github/
├── data/
│   ├── contactData.js
│   ├── userData.js
├── node_modules/
├── pages/
│   ├── contactPage.js
│   ├── loginPage.js
├── playwright-report/
├── routes/
│   ├── apiEndpoints.json
├── settings/
│   ├── settings.json
├── test-results/
│   ├── .last-run.json
├── tests/
│   ├── e2e-api/
│   │   ├── assets/
│   │   └── fileUploadDownload.spec.js
│   ├── e2e-ui/
│   │   └── demo.spec.js
├── utils/
│   ├── apiHelpers.js
├── .gitignore
├── contact-data.json
├── package-lock.json
├── package.json
├── playwright.config.js
├── README.md
├── user-data.json
```

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/samiullah/searchStaxAssignment.git
   cd searchStaxAssignment
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Configuration

Configure the test settings in `settings/settings.json`:

```json
{
    "headless": true,  // false if u want headed
    "parallel": false,  // true if u want parallel
    "workerCount": 1   // if above flage false then increase worker count
}
```

## Running the Tests

### UI Tests

1. To run the UI tests:
   ```bash
   npx playwright test tests/e2e-ui --config=playwright.config.js
   ```

2. The test results will be captured in `test-results/.last-run.json`.

### API Tests

1. To run the API tests:
   ```bash
   npx playwright test tests/e2e-api --config=playwright.config.js
   ```

2. The downloaded file content will be written to a file and used for uploading.

## Page Object Model

The POM framework is implemented in the `pages/` directory. Each page has its own class and methods to interact with the UI.

## Instructions to Execute Code

1. Clone the repository and install the dependencies.
2. Configure the settings in `settings/settings.json`.
3. Run the tests using the Playwright CLI.
4. Please note UI tests are dependent on each other since we are writing data from one test to other, so its
recommended to run in serial mode only

