
export class LeftNevigationPage{

    constructor(page)
    {
        this.page = page
        this.pimlink = page.getByRole('link', { name: 'PIM' })
        this.orangeHrmLogo = page.getByRole('link', { name: 'client brand banner' })
        this.LeftNevigationPanel = page.locator('div.oxd-sidepanel-body')
    }

    async openPimModule()
    {
        await this.pimlink.click()
    }
}