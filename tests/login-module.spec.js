import{expect, test} from '@playwright/test'
import CommonUtils from '../utils/common-utils'
import { LoginPage } from '../pages/LoginPage'
import { LeftNevigationPage } from  '../pages/LeftNevigationPage'
import loginModuleData from '../data/login-module-data.json'


test.use({storageState:{
    cookies:[],
    origins:[]
}})

test('Verify that user can not login with as invaliad Password',{
    tag:['@UI', '@UAT']
}, async({page})=>{
    const commonUtilsObj = new CommonUtils()
    const userName = commonUtilsObj.decryptData(process.env.USER_NAME)

    const loginpage = new LoginPage(page)
    await loginpage.gotoOrangeHrm()
    await loginpage.loginOrangeHrm(userName,loginModuleData.wrong_password)

    await expect(loginpage.invalidErrorMessage).toHaveText(loginModuleData.invalid_credential_text)
    await expect(loginpage.usernameInput).toBeVisible()
})

test('Verify that user can not login with as invalid Username',{
    tag:['@UI','@UAT']
}, async({page})=>{
    const commonUtilsObj = new CommonUtils()
    const password = commonUtilsObj.decryptData(process.env.PASSWORD)

    const loginpage = new LoginPage(page)
    await loginpage.gotoOrangeHrm()
    await loginpage.loginOrangeHrm(loginModuleData.wrong_username,password)

    await expect(loginpage.invalidErrorMessage).toHaveText(loginModuleData.invalid_credential_text)
    await expect(loginpage.usernameInput).toBeVisible()
})

test('Verify that user can not login with as invalid Username and Password',{
    tag:['@UI', '@DEV']
}, async({page})=>{

    const loginpage = new LoginPage(page)
    await loginpage.gotoOrangeHrm()
    await loginpage.loginOrangeHrm(loginModuleData.wrong_username,loginModuleData.wrong_password)

    await expect(loginpage.invalidErrorMessage).toHaveText(loginModuleData.invalid_credential_text)
    await expect(loginpage.usernameInput).toBeVisible()
})

// test('Verify that user can log in with valid username and password', async({page})=>{

//     const commonUtilsObj = new CommonUtils()
//     const username = commonUtilsObj.decryptData(process.env.USER_NAME)
//     const password = commonUtilsObj.decryptData(process.env.PASSWORD)

//     const loginpage = new LoginPage(page)
//     await loginpage.gotoOrangeHrm()
//     await loginpage.loginOrangeHrm(username,password)

//     const leftNevigationPageObj = new LeftNevigationPage(page)
//     await expect(leftNevigationPageObj.orangeHrmLogo).toHaveScreenshot('OrangeHrmBrandLogo.png')
//     await expect(leftNevigationPageObj.LeftNevigationPanel).toHaveScreenshot('LeftNevigationPanel.png')

// })

