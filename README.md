# qa-e2e-testing
This repository contains automated end-to-end (E2E) tests for the ToolsShopDemo application using Playwright with the Page Object Model (POM) pattern.

---

# Installation Guide for QA E2E Testing

This guide will help you set up the QA E2E Testing project on your local machine.

## **1. Prerequisites**
Before you start, make sure you have the following installed:

- **Node.js (LTS version)** ([Download Node.js](https://nodejs.org/))
- **Playwright** ([Installation Guide](https://playwright.dev/docs/intro))
- **Git** ([Download Git](https://git-scm.com/downloads))

### **Check Installed Versions**
Run the following commands to verify that everything is correctly installed:

```sh
node -v
npx playwright --version
git --version
```

If any of these return an error, install or configure them before proceeding.

---

## **2. Clone the Repository**
Navigate to the directory where you want to store the project and run:

```sh
git clone https://github.com/sbabet-qualiphilos/qa-e2e-testing.git
cd qa-e2e-testing
```

---

## **3. Install Dependencies**
Run the following command to install all project dependencies:

```sh
npm install
```

This will ensure all required dependencies are installed in your local environment.

---

## **4. Run the Tests**
Execute the following command to run all tests:

```sh
npx playwright test
```

If everything is configured correctly, the test execution should start.

---

## **5. View Playwright Test Report**
After running the tests, generate and view the Playwright report by executing:

```sh
npx playwright show-report
```

This will open the test execution report in a web browser.

---

## **6. Additional Commands**
- **Run tests in headed mode (visible browser window):**
  ```sh
  npx playwright test --headed
  ```
- **Run tests for a specific file:**
  ```sh
  npx playwright test tests/search.spec.ts
  ```
- **Run tests with a specific tag:**
  ```sh
  npx playwright test --grep @search
  ```
- **Generate Playwright traces for debugging:**
  ```sh
  npx playwright test --trace on
  ```

---

Congratulations! 🎉 You have successfully set up the QA E2E Testing project. 🚀
