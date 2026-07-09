
export class UserPage{
    constructor(page){
        this.page = page
        this.userMenuButton = page.locator('.oxd-dropdown-menu')
        this.logoutButton = page.getByRole('menuitem', { name: 'Logout' })
    }

    async logout(){
        await this.userMenuButton.click()
        await this.logoutButton.click()
    }
}