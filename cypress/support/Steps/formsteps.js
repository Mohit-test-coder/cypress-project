import { before, Given, Then, When, And } from "cypress-cucumber-preprocessor/steps";

// Given block in Cucumber is used to define the initial state of the application before the test starts.
Given('open browser enter Simple Form url', () => {
    cy.visit('https://v1.training-support.net/selenium/simple-form')
    
})

// When block in Cucumber is used to define the actions that the user performs on the application.
When('enter first name', () => {
    cy.get('#firstName').type('Mohit');
})

//And block in Cucumber is used to define the actions that the user performs on the application.
And('enter last name', () => {
    cy.get('#lastName').type('Gupta');
    
})

And('enter email', () => {
    cy.get('#email').type('mohitgupta@gmail.com');
    
})

And('enter contact number', () => {
    cy.get('#number').type('7028499422');
    
})

And('enter message', () => {
    cy.get('[rows="2"]').type('Hello Cypress');
    
})

And('click on submit button', () => {
    cy.get('[onclick="simpleFormSubmit()"]').click();
    
})

// Then block in Cucumber is used to define the expected result or outcome of the test.
Then('successfully alert should be display with name and last name and message of thank you', () => {
    cy.on('window:alert', (text) => {

        expect(text).to.contains('Thank You for reaching out to us, Mohit Gupta');
        
    })
    
})

