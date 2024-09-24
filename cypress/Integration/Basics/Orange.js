describe('Orange', () => {
    it('Login Test', () => {
        // visit the website
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        
        // Enter username
        cy.get("[name='username']").type("Admin")

        // Enter password
        cy.get("[placeholder='Password']").type("admin123")

        // Click on login button
        cy.get('.oxd-button').click()
        
    });
});