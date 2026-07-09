
export class PimPage{

    constructor(page)
    {
        this.page = page
        this.addPimButton = page.getByRole('link', { name: 'Add Employee' })
        this.firstNameTextBox = page.getByRole('textbox', { name: 'First Name' })
        this.middleNameTextBox = page.getByRole('textbox', { name: 'Middle Name' })
        this.lastNameTextBox = page.getByRole('textbox', { name: 'Last Name' })
        this.saveButton =  page.getByRole('button', { name: 'Save' })
        this.newEmployeeNameHeading = page.locator('.orangehrm-edit-employee-name')
    }

    async addEmployee(firstName, middleName, LastName){
        await this.addPimButton.click()
        await this.firstNameTextBox.fill(firstName)
        await this.middleNameTextBox.fill(middleName)
        await this.lastNameTextBox.fill(LastName)
        await this.saveButton.click()
    }

     employeeNameHeading(){
        return this.newEmployeeNameHeading
    }
}