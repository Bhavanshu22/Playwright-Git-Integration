# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: global.setup.js >> global set up for auto login
- Location: tests\global.setup.js:6:5

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator: getByRole('heading', { name: 'Dashboard' })
Expected: "Dashboard"
Error: element(s) not found

Call log:
  - Expect "toHaveText" with timeout 30000ms
  - waiting for getByRole('heading', { name: 'Dashboard' })

```

```yaml
- img "company-branding"
- heading "Login" [level=5]
- paragraph: "Username : Admin"
- paragraph: "Password : admin123"
- text:  Username
- textbox "Username"
- text: Required  Password
- textbox "Password"
- text: Required
- button "Login"
- paragraph: Forgot your password?
- link:
  - /url: https://www.linkedin.com/company/orangehrm/mycompany/
- link:
  - /url: https://www.facebook.com/OrangeHRM/
- link:
  - /url: https://twitter.com/orangehrm?lang=en
- link:
  - /url: https://www.youtube.com/c/OrangeHRMInc
- paragraph: OrangeHRM OS 5.9
- paragraph:
  - text: © 2005 - 2026
  - link "OrangeHRM, Inc":
    - /url: http://www.orangehrm.com
  - text: . All rights reserved.
- img "orangehrm-logo"
```

# Test source

```ts
  1  | import {expect, test} from '@playwright/test'
  2  | import { LoginPage } from '../pages/LoginPage'
  3  | import { DashboardPage } from '../pages/DashboardPage'
  4  | import CommonUtils from '../utils/common-utils'
  5  | 
  6  | test('global set up for auto login', async({page})=>{
  7  | 
  8  |     const commonUtilsObj = new CommonUtils()
  9  |     const decreptedUserName = commonUtilsObj.decryptData(process.env.USER_NAME)
  10 |     const decreptedPassword = commonUtilsObj.decryptData(process.env.PASSWORD)
  11 |     
  12 |     const loginpage = new LoginPage(page)
  13 |     await loginpage.gotoOrangeHrm()
  14 |     await loginpage.loginOrangeHrm(decreptedUserName,decreptedPassword)
  15 | 
  16 |     // await page.waitForURL(process.env.BASE_URL +'/web/index.php/dashboard/index')
  17 | 
  18 |     const dashboardPage = new DashboardPage(page)
  19 |     await page.waitForTimeout(5000)
> 20 |     expect(dashboardPage.dashboardTitleText).toHaveText('Dashboard')
     |                                              ^ Error: expect(locator).toHaveText(expected) failed
  21 | 
  22 |     await page.context().storageState({
  23 |         path: './playwright/.auth/auth.json'
  24 |     })
  25 | 
  26 | })
```