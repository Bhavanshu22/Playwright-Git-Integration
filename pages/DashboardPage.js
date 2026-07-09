
export class DashboardPage{
    constructor(page){
        this.page=page
        this.dashboardTitleText = page.getByRole('heading', { name: 'Dashboard' })
    }
}