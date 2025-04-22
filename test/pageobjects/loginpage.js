class LoginPage{

    get inputUsername () {
        return $("#username");
    }

    get inputPassword () {
        return $("#password");
    }

    get btnSubmit () {
        return $("#signInBtn");
    }               

    
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    
}

export default new LoginPage();
