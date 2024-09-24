///<reference types="cypress" />

describe('v1 test', () => {
    it('Test - CssSelector', () => {

        cy.visit("https://v1.training-support.net/selenium/simple-form")
        
        //Enter first name
        cy.get("#firstName").type("Mohit")

        //Enter last name
        cy.get("#lastName").type("Gupta")

        //Enter email
        cy.get("#email").type("mohit@gmail.com")

        //Enter contact number
        cy.get("#number").type("7028499422")

        //Enter message
        cy.get("textarea[rows='2']").type("Hello World")

        //Click submit button
        cy.get("[value='submit']").click()

        

    });
});