class LoginPage {

    // In this class we have to write reusable methods for login page

    EnterUrl() {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    }

    //Reusable method for login
    LogintoApplication() {
        cy.get('[name="username"]').type("Admin")
        cy.get('[name="password"]').type("admin123")
        cy.get('[type="submit"]').click()
        
    }

    forgetPassword() {
        cy.get('.orangehrm-login-forgot').click();

        cy.get('[name="username"]').type("random user");

        cy.get('.orangehrm-forgot-password-button--reset').click();
    }

}// end of class

export default LoginPage;

