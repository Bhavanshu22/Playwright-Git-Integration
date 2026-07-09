import {expect, test} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import { DashboardPage } from '../pages/DashboardPage'
import CommonUtils from '../utils/common-utils'

test('global set up for auto login', async({page})=>{

    const commonUtilsObj = new CommonUtils()
    const decreptedUserName = commonUtilsObj.decryptData(process.env.USER_NAME)
    const decreptedPassword = commonUtilsObj.decryptData(process.env.PASSWORD)
    
    const loginpage = new LoginPage(page)
    await loginpage.gotoOrangeHrm()
    await loginpage.loginOrangeHrm(decreptedUserName,decreptedPassword)

    // await page.waitForURL(process.env.BASE_URL +'/web/index.php/dashboard/index')

    const dashboardPage = new DashboardPage(page)
    // await page.waitForTimeout(5000)
    // expect(dashboardPage.dashboardTitleText).toHaveText('Dashboard')

    await page.context().storageState({
        path: './playwright/.auth/auth.json'
    })

})