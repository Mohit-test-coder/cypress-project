import { before, Given, Then, When, And } from "cypress-cucumber-preprocessor/steps";

Given('open the browser and enter the url', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    
})

When('enter username as {word}', (username) => {
    cy.get('input[name="username"]').type(username)
})

And('enter password as {word}', (password) => {
  cy.get('input[name="password"]').type(password)  
})

And('click on submit', () => {
    cy.get('button[type="submit"]').click()
    // cy.wait(5000)
    
})

Then('login should be successful', () => {
    // cy.get('.oxd-text--h6').should('is.contain', 'Dashboard') //Positive test case
    cy.get('.oxd-alert-content-text').should('is.contain', 'Invalid credentials') //Negative test case
    
})