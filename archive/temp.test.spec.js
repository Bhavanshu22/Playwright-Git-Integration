import{expect, test} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import CommonUtils from '../utils/common-utils'
import { UserPage } from '../pages/UserPage'

test('Temp test', async({page})=>{

    console.log(process.env.BASE_URL)
    console.log(process.env.USER_NAME)
    console.log(process.env.PASSWORD)

    // const loginpage = new LoginPage(page)
    // await loginpage.gotoOrangeHrm()
    // await loginpage.loginOrangeHrm('Admin','admin123')

    // const commonUtilsObj = new CommonUtils()
    // commonUtilsObj.encryptData('admin123')

    // const decreptedUserName = commonUtilsObj.decryptData(process.env.USER_NAME)
    // const decreptedPassword = commonUtilsObj.decryptData(process.env.PASSWORD)

    // const loginpage = new LoginPage(page)
    // await loginpage.gotoOrangeHrm()
    // await loginpage.loginOrangeHrm(decreptedUserName,decreptedPassword)

//     const loginpage = new LoginPage(page)
//     await loginpage.gotoOrangeHrm()
//     console.log(await page.title())
// })

// test('test temp2', async({page})=>{
//     await expect(page).toHaveTitle('OrangeHRM')

// })

// test('test temp3', async({page})=>{
//     await expect(page).toHaveTitle('OrangeHRM')

//     const userPageObj = new UserPage(page)
//     await userPageObj.logout()

})