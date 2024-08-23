
# Travel Map Tests

Automated tests for the Travel Map Generator website, developed using Cypress. These tests ensure the reliability of key functionalities such as country selection, map updates, and feedback submission. This repository is designed to support continuous integration and can be easily extended with additional test cases.

## Table of Contents

- [Installation](#installation)
- [Running Tests](#running-tests)
- [Test Structure](#test-structure)
- [Contributing](#contributing)
- [License](#license)

## Installation

To set up the project locally, follow these steps:

1. Clone the repository:

    ```bash
    git clone https://github.com/albope/travel-map-tests.git
    cd travel-map-tests
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

## Running Tests

You can run the tests using Cypress's Test Runner or via the command line.

### Using Cypress Test Runner

1. Open the Cypress Test Runner:

    ```bash
    npx cypress open
    ```

2. Select a test file to run or run all tests from the Test Runner interface.

### Running Tests in Headless Mode

To run all tests in headless mode (useful for CI/CD pipelines):

```bash
npx cypress run
```
### Test Structure

The test files are organized under the cypress/e2e directory. Each test file focuses on a specific functionality of the Travel Map Generator website:

**travel_map_spec.cy.js**: Verifies the main page loads correctly and checks the page title.

**verify_country_list.cy.js**: Ensures that the list of countries is displayed correctly.

**verify_country_selection.cy.js**: Tests the selection and deselection of countries.

**verify_download_button.cy.js**: Confirms the download button functions as expected.

**verify_feedback_form.cy.js**: Checks the feedback form submission process.

**verify_map_update.cy.js**: Ensures that the map updates correctly when interacting with it.

**verify_scroll_button.cy.js**: Tests the functionality of the scroll button.

### Contributing

Contributions are welcome! 

If you want to add new tests or improve existing ones, feel free to fork the repository, make your changes, and submit a pull request.

