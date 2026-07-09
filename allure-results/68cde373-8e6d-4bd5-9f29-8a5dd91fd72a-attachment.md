# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login-module.spec.js >> Verify that user can log in with valid username and password
- Location: tests\login-module.spec.js:53:5

# Error details

```
Error: expect(locator).toHaveScreenshot(expected) failed

Locator: getByRole('link', { name: 'client brand banner' })
  234 pixels (ratio 0.01 of all image pixels) are different.

  Snapshot: OrangeHrmBrandLogo.png

Call log:
  - Expect "toHaveScreenshot(OrangeHrmBrandLogo.png)" with timeout 30000ms
    - verifying given screenshot expectation
  - waiting for getByRole('link', { name: 'client brand banner' })
    - locator resolved to <a class="oxd-brand" data-v-16e446b0="" data-v-5b6b3cf3="" href="https://www.orangehrm.com/">…</a>
  - taking element screenshot
    - disabled all CSS animations
  - waiting for fonts to load...
  - fonts loaded
  - attempting scroll into view action
    - waiting for element to be stable
  - 234 pixels (ratio 0.01 of all image pixels) are different.
  - waiting 100ms before taking screenshot
  - waiting for getByRole('link', { name: 'client brand banner' })
    - locator resolved to <a class="oxd-brand" data-v-16e446b0="" data-v-5b6b3cf3="" href="https://www.orangehrm.com/">…</a>
  - taking element screenshot
    - disabled all CSS animations
  - waiting for fonts to load...
  - fonts loaded
  - attempting scroll into view action
    - waiting for element to be stable
  - captured a stable screenshot
  - 234 pixels (ratio 0.01 of all image pixels) are different.

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic:
    - complementary [ref=e4]:
      - navigation "Sidepanel" [ref=e5]:
        - generic [ref=e6]:
          - link "client brand banner" [ref=e7] [cursor=pointer]:
            - /url: https://www.orangehrm.com/
            - img "client brand banner" [ref=e9]
          - text: 
        - generic [ref=e10]:
          - generic [ref=e11]:
            - generic [ref=e12]:
              - textbox "Search" [ref=e15]
              - button "" [ref=e16] [cursor=pointer]:
                - generic [ref=e17]: 
            - separator [ref=e18]
          - list [ref=e19]:
            - listitem [ref=e20]:
              - link "Admin" [ref=e21] [cursor=pointer]:
                - /url: /web/index.php/admin/viewAdminModule
                - generic [ref=e24]: Admin
            - listitem [ref=e25]:
              - link "PIM" [ref=e26] [cursor=pointer]:
                - /url: /web/index.php/pim/viewPimModule
                - generic [ref=e40]: PIM
            - listitem [ref=e41]:
              - link "Leave" [ref=e42] [cursor=pointer]:
                - /url: /web/index.php/leave/viewLeaveModule
                - generic [ref=e45]: Leave
            - listitem [ref=e46]:
              - link "Time" [ref=e47] [cursor=pointer]:
                - /url: /web/index.php/time/viewTimeModule
                - generic [ref=e53]: Time
            - listitem [ref=e54]:
              - link "Recruitment" [ref=e55] [cursor=pointer]:
                - /url: /web/index.php/recruitment/viewRecruitmentModule
                - generic [ref=e61]: Recruitment
            - listitem [ref=e62]:
              - link "My Info" [ref=e63] [cursor=pointer]:
                - /url: /web/index.php/pim/viewMyDetails
                - generic [ref=e69]: My Info
            - listitem [ref=e70]:
              - link "Performance" [ref=e71] [cursor=pointer]:
                - /url: /web/index.php/performance/viewPerformanceModule
                - generic [ref=e79]: Performance
            - listitem [ref=e80]:
              - link "Dashboard" [ref=e81] [cursor=pointer]:
                - /url: /web/index.php/dashboard/index
                - generic [ref=e84]: Dashboard
            - listitem [ref=e85]:
              - link "Directory" [ref=e86] [cursor=pointer]:
                - /url: /web/index.php/directory/viewDirectory
                - generic [ref=e89]: Directory
            - listitem [ref=e90]:
              - link "Maintenance" [ref=e91] [cursor=pointer]:
                - /url: /web/index.php/maintenance/viewMaintenanceModule
                - generic [ref=e95]: Maintenance
            - listitem [ref=e96]:
              - link "Claim" [ref=e97] [cursor=pointer]:
                - /url: /web/index.php/claim/viewClaimModule
                - img [ref=e100]
                - generic [ref=e104]: Claim
            - listitem [ref=e105]:
              - link "Buzz" [ref=e106] [cursor=pointer]:
                - /url: /web/index.php/buzz/viewBuzz
                - generic [ref=e109]: Buzz
    - banner [ref=e110]:
      - generic [ref=e111]:
        - generic [ref=e112]:
          - text: 
          - heading "Dashboard" [level=6] [ref=e114]
        - link "Upgrade" [ref=e116]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=e117] [cursor=pointer]: Upgrade
        - list [ref=e123]:
          - listitem [ref=e124]:
            - generic [ref=e125] [cursor=pointer]:
              - img "profile picture" [ref=e126]
              - paragraph [ref=e127]: Carlos Santos
              - generic [ref=e128]: 
      - navigation "Topbar Menu" [ref=e130]:
        - list [ref=e131]:
          - button "" [ref=e133] [cursor=pointer]:
            - generic [ref=e134]: 
  - generic [ref=e135]:
    - generic [ref=e137]:
      - generic [ref=e139]:
        - generic [ref=e141]:
          - generic [ref=e142]: 
          - paragraph [ref=e143]: Time at Work
        - separator [ref=e144]
        - generic [ref=e146]:
          - generic [ref=e147]:
            - img "profile picture" [ref=e149]
            - generic [ref=e150]:
              - paragraph [ref=e151]: Punched Out
              - paragraph [ref=e152]: "Punched Out: Today at 06:39 PM (GMT 5.5)"
          - generic [ref=e153]:
            - generic [ref=e154]: 9h 0m Today
            - button "" [ref=e155] [cursor=pointer]:
              - generic [ref=e156]: 
          - separator [ref=e157]
          - generic [ref=e158]:
            - generic [ref=e159]:
              - paragraph [ref=e160]: This Week
              - paragraph [ref=e161]: Jun 22 - Jun 28
            - generic [ref=e162]:
              - generic [ref=e163]: 
              - paragraph [ref=e164]: 9h 0m
      - generic [ref=e168]:
        - generic [ref=e170]:
          - generic [ref=e171]: 
          - paragraph [ref=e172]: My Actions
        - separator [ref=e173]
        - generic [ref=e175]:
          - generic [ref=e176]:
            - button [ref=e177] [cursor=pointer]
            - paragraph [ref=e193] [cursor=pointer]: (1) Timesheet to Approve
          - generic [ref=e194]:
            - button [ref=e195] [cursor=pointer]
            - paragraph [ref=e201] [cursor=pointer]: (1) Pending Self Review
          - generic [ref=e202]:
            - button [ref=e203] [cursor=pointer]
            - paragraph [ref=e212] [cursor=pointer]: (1) Candidate to Interview
      - generic [ref=e214]:
        - generic [ref=e216]:
          - generic [ref=e217]: 
          - paragraph [ref=e218]: Quick Launch
        - separator [ref=e219]
        - generic [ref=e221]:
          - generic [ref=e222]:
            - button "Assign Leave" [ref=e223] [cursor=pointer]
            - generic "Assign Leave" [ref=e226]:
              - paragraph [ref=e227]: Assign Leave
          - generic [ref=e228]:
            - button "Leave List" [ref=e229] [cursor=pointer]
            - generic "Leave List" [ref=e236]:
              - paragraph [ref=e237]: Leave List
          - generic [ref=e238]:
            - button "Timesheets" [ref=e239] [cursor=pointer]
            - generic "Timesheets" [ref=e245]:
              - paragraph [ref=e246]: Timesheets
          - generic [ref=e247]:
            - button "Apply Leave" [ref=e248] [cursor=pointer]
            - generic "Apply Leave" [ref=e251]:
              - paragraph [ref=e252]: Apply Leave
          - generic [ref=e253]:
            - button "My Leave" [ref=e254] [cursor=pointer]
            - generic "My Leave" [ref=e259]:
              - paragraph [ref=e260]: My Leave
          - generic [ref=e261]:
            - button "My Timesheet" [ref=e262] [cursor=pointer]
            - generic "My Timesheet" [ref=e265]:
              - paragraph [ref=e266]: My Timesheet
      - generic [ref=e268]:
        - generic [ref=e270]:
          - generic [ref=e271]: 
          - paragraph [ref=e272]: Buzz Latest Posts
        - separator [ref=e273]
        - generic [ref=e276]:
          - generic [ref=e277] [cursor=pointer]:
            - img "profile picture" [ref=e279]
            - generic [ref=e280]:
              - paragraph [ref=e281]: Carlos Eduardo Santos
              - paragraph [ref=e282]: 2020-08-10 09:08 AM
          - separator [ref=e283]
          - paragraph [ref=e284]: "Hi All; Linda has been blessed with a baby boy! Linda: With love, we welcome your dear new baby to this world. Congratulations!"
      - generic [ref=e286]:
        - generic [ref=e287]:
          - paragraph [ref=e292]: Employees on Leave Today
          - generic [ref=e293] [cursor=pointer]: 
        - separator [ref=e294]
        - generic [ref=e296]:
          - img "No Content" [ref=e297]
          - paragraph [ref=e298]: No Employees are on Leave Today
      - generic [ref=e300]:
        - generic [ref=e302]:
          - generic [ref=e303]: 
          - paragraph [ref=e304]: Employee Distribution by Sub Unit
        - separator [ref=e305]
        - list [ref=e310]:
          - listitem [ref=e311] [cursor=pointer]:
            - generic "Human Resources" [ref=e313]
          - listitem [ref=e314] [cursor=pointer]:
            - generic "Unassigned" [ref=e316]
      - generic [ref=e318]:
        - generic [ref=e320]:
          - generic [ref=e321]: 
          - paragraph [ref=e322]: Employee Distribution by Location
        - separator [ref=e323]
        - list [ref=e328]:
          - listitem [ref=e329] [cursor=pointer]:
            - generic "Texas R&D" [ref=e331]
          - listitem [ref=e332] [cursor=pointer]:
            - generic "Unassigned" [ref=e334]
    - generic [ref=e335]:
      - paragraph [ref=e336]: OrangeHRM OS 5.8
      - paragraph [ref=e337]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=e338] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
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
  23 |     await expect(loginpage.invalidErrorMessage).toHaveText(loginModuleData.invalid_credential_text)
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
> 64 |     await expect(leftNevigationPageObj.orangeHrmLogo).toHaveScreenshot('OrangeHrmBrandLogo.png')
     |                                                       ^ Error: expect(locator).toHaveScreenshot(expected) failed
  65 |     await expect(leftNevigationPageObj.LeftNevigationPanel).toHaveScreenshot('LeftNevigationPanel.png')
  66 | 
  67 | })
  68 | 
  69 | 
```