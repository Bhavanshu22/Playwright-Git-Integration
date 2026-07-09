# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login-module.spec.js >> Verify that user can not login with as invalid Username and Password
- Location: tests\login-module.spec.js:41:5

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator:  getByText('Invalid credentials')
Expected: "Invalid credentials"
Received: ""

Call log:
  - Expect "toHaveText" with timeout 30000ms
  - waiting for getByText('Invalid credentials')
    - waiting for navigation to finish...
    - navigated to "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"

```

```
Error: apiRequestContext._wrapApiCall: Target page, context or browser has been closed
```