
export class LoginPage{

    constructor(page){
        this.page = page
        this.usernameInput=page.getByRole("textbox", { name: "Username" })
        this.passwordInput=page.getByRole("textbox", { name: "Password" })
        this.loginButton=page.getByRole("button", { name: "Login" })
        this.invalidErrorMessage = page.getByText('Invalid credentials')
    }

    async gotoOrangeHrm(){
        await this.page.goto(`${process.env.BASE_URL}`)
    }

    async loginOrangeHrm(username,password){
    
        await this.usernameInput.fill(username)
        await this.passwordInput.fill(password)
        await this.loginButton.click()
    }
}