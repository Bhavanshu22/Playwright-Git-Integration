import {expect, test} from '@playwright/test'
import { LeftNevigationPage } from '../pages/LeftNevigationPage'    
import { PimPage } from '../pages/PimPage'
import { LoginPage } from '../pages/LoginPage'
import pimdata from '../data/pim-module-data.json'


test('Verify that new employee successfully created under pim module',{
    tag:['@UI', '@UAT'],
    annotation:{
        type:'Test case link',
        description:'past link here'
    }
}, async({page})=>{

    const loginpage = new LoginPage(page)
    await loginpage.gotoOrangeHrm()

    const leftNevigationPageobj = new LeftNevigationPage(page)
    await leftNevigationPageobj.openPimModule()

    const pimPageObj = new PimPage(page)
    await pimPageObj.addEmployee(pimdata.firstName, pimdata.middleName, pimdata.lastName)

    await expect(pimPageObj.employeeNameHeading()).toHaveText(`${pimdata.firstName} ${pimdata.lastName}`)
})