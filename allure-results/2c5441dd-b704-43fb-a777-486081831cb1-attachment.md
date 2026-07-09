# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login-module.spec.js >> Verify that user can not login with as invaliad Password
- Location: tests\login-module.spec.js:13:5

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator: getByText('Invalid credentials')
Expected: "Invalid credentials"
Timeout: 30000ms
Error: element(s) not found

Call log:
  - Expect "toHaveText" with timeout 30000ms
  - waiting for getByText('Invalid credentials')

```

```yaml
- img "company-branding"
- heading "Login" [level=5]
- paragraph: "Username : Admin"
- paragraph: "Password : admin123"
- text:  Username
- textbox "Username"
- text: Required  Password
- textbox "Password": adminwrongpassword
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
  1  | import{expect, test} from '@playwright/test'
  2  | import CommonUtils from '../utils/common-utils'
  3  | import { LoginPage } from '../pages/LoginPage'
  4  | import { LeftNevigationPage } from  '../pages/LeftNevigationPage'
  5  | import loginModuleData from '../data/login-module-data.json'
  6  | 
  7  | 
  8  | test.use({storageState:{
  9  |     cookies:[],
  10 |     origins:[]
  11 | }})
  12 | 
  13 | test('Verify that user can not login with as invaliad Password',{
  14 |     tag:['@UI', '@UAT']
  15 | }, async({page})=>{
  16 |     const commonUtilsObj = new CommonUtils()
  17 |     const userName = commonUtilsObj.decryptData(process.env.USER_NAME)
  18 | 
  19 |     const loginpage = new LoginPage(page)
  20 |     await loginpage.gotoOrangeHrm()
  21 |     await loginpage.loginOrangeHrm(userName,loginModuleData.wrong_password)
  22 | 
> 23 |     await expect(loginpage.invalidErrorMessage).toHaveText(loginModuleData.invalid_credential_text)
     |                                                 ^ Error: expect(locator).toHaveText(expected) failed
  24 |     await expect(loginpage.usernameInput).toBeVisible()
  25 | })
  26 | 
  27 | test('Verify that user can not login with as invalid Username',{
  28 |     tag:['@UI','@UAT']
  29 | }, async({page})=>{
  30 |     const commonUtilsObj = new CommonUtils()
  31 |     const password = commonUtilsObj.decryptData(process.env.PASSWORD)
  32 | 
  33 |     const loginpage = new LoginPage(page)
  34 |     await loginpage.gotoOrangeHrm()
  35 |     await loginpage.loginOrangeHrm(loginModuleData.wrong_username,password)
  36 | 
  37 |     await expect(loginpage.invalidErrorMessage).toHaveText(loginModuleData.invalid_credential_text)
  38 |     await expect(loginpage.usernameInput).toBeVisible()
  39 | })
  40 | 
  41 | test('Verify that user can not login with as invalid Username and Password',{
  42 |     tag:['@UI', '@DEV']
  43 | }, async({page})=>{
  44 | 
  45 |     const loginpage = new LoginPage(page)
  46 |     await loginpage.gotoOrangeHrm()
  47 |     await loginpage.loginOrangeHrm(loginModuleData.wrong_username,loginModuleData.wrong_password)
  48 | 
  49 |     await expect(loginpage.invalidErrorMessage).toHaveText(loginModuleData.invalid_credential_text)
  50 |     await expect(loginpage.usernameInput).toBeVisible()
  51 | })
  52 | 
  53 | test('Verify that user can log in with valid username and password', async({page})=>{
  54 | 
  55 |     const commonUtilsObj = new CommonUtils()
  56 |     const username = commonUtilsObj.decryptData(process.env.USER_NAME)
  57 |     const password = commonUtilsObj.decryptData(process.env.PASSWORD)
  58 | 
  59 |     const loginpage = new LoginPage(page)
  60 |     await loginpage.gotoOrangeHrm()
  61 |     await loginpage.loginOrangeHrm(username,password)
  62 | 
  63 |     const leftNevigationPageObj = new LeftNevigationPage(page)
  64 |     await expect(leftNevigationPageObj.orangeHrmLogo).toHaveScreenshot('OrangeHrmBrandLogo.png')
  65 |     await expect(leftNevigationPageObj.LeftNevigationPanel).toHaveScreenshot('LeftNevigationPanel.png')
  66 | 
  67 | })
  68 | 
  69 | 
```