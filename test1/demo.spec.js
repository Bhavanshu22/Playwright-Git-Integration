import{expect, test} from '@playwright/test'

test('verfiy filpkart',async({page})=>{
    await page.goto('https://www.flipkart.com/')
})