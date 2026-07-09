# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: global.setup.js >> global set up for auto login
- Location: tests\global.setup.js:6:5

# Error details

```
Test timeout of 90000ms exceeded.
```

```
Error: page.waitForURL: Test timeout of 90000ms exceeded.
=========================== logs ===========================
waiting for navigation to "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index" until "load"
============================================================
```

# Page snapshot

```yaml
- generic [ref=e4]:
  - generic [ref=e6]:
    - img "company-branding" [ref=e8]
    - generic [ref=e9]:
      - heading "Login" [level=5] [ref=e10]
      - generic [ref=e11]:
        - generic [ref=e13]:
          - paragraph [ref=e14]: "Username : Admin"
          - paragraph [ref=e15]: "Password : admin123"
        - generic [ref=e16]:
          - generic [ref=e18]:
            - generic [ref=e19]:
              - generic [ref=e20]: 
              - generic [ref=e21]: Username
            - textbox "Username" [ref=e23]
            - generic [ref=e24]: Required
          - generic [ref=e26]:
            - generic [ref=e27]:
              - generic [ref=e28]: 
              - generic [ref=e29]: Password
            - textbox "Password" [ref=e31]
            - generic [ref=e32]: Required
          - button "Login" [active] [ref=e34] [cursor=pointer]
          - paragraph [ref=e36] [cursor=pointer]: Forgot your password?
      - generic [ref=e37]:
        - generic [ref=e38]:
          - link [ref=e39] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/orangehrm/mycompany/
          - link [ref=e42] [cursor=pointer]:
            - /url: https://www.facebook.com/OrangeHRM/
          - link [ref=e45] [cursor=pointer]:
            - /url: https://twitter.com/orangehrm?lang=en
          - link [ref=e48] [cursor=pointer]:
            - /url: https://www.youtube.com/c/OrangeHRMInc
        - generic [ref=e51]:
          - paragraph [ref=e52]: OrangeHRM OS 5.9
          - paragraph [ref=e53]:
            - text: © 2005 - 2026
            - link "OrangeHRM, Inc" [ref=e54] [cursor=pointer]:
              - /url: http://www.orangehrm.com
            - text: . All rights reserved.
  - img "orangehrm-logo" [ref=e56]
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
> 16 |     await page.waitForURL(process.env.BASE_URL +'/web/index.php/dashboard/index')
     |                ^ Error: page.waitForURL: Test timeout of 90000ms exceeded.
  17 | 
  18 |     const dashboardPage = new DashboardPage(page)
  19 |     await page.waitForTimeout(5000)
  20 |     expect(dashboardPage.dashboardTitleText).toHaveText('Dashboard')
  21 | 
  22 |     await page.context().storageState({
  23 |         path: './playwright/.auth/auth.json'
  24 |     })
  25 | 
  26 | })
```