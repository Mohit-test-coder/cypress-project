describe('Facebook Test', () => {
    it('Login Test', () => {
        // visit the website
        cy.visit("https://www.facebook.com/login/device-based/regular/login/?login_attempt=1")
        
        // Enter username
        cy.get("#email").type("mohitshubhangi10@gmail.com")

        // Enter password
        cy.get("#pass").type("Shubhangi@7028")

        // Click on login button
        cy.get('#loginbutton').click()
        
    });
});