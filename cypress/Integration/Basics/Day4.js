///<reference types="cypress" />



describe('form test - using Xpath locators', () => {
    it.only('Form test', () => {

        //Visit the website
        cy.visit('https://v1.training-support.net/selenium/simple-form')

        //Assert the URL that URL has included selenium
        cy.url().should('include', 'selenium')

        //Title assertion to check if the title is correct
        cy.title().should('include', 'Simple Form')

        //Visibility of Simple form 
        cy.xpath("(//*[contains(text(),'Simple Form')])[2]").should('be.visible')


        //Assert whether first name text box is having placeholder or not then assert the placeholder value
        cy.get("#firstName").should('have.attr', 'placeholder', 'First Name')


        //Assertion chaining add multiple assertions in single line of code
        cy.xpath("//input[@id='firstName']").should('have.id', 'firstName').type('Mohit').should('have.value', 'Mohit');


        //Assertion chaining add multiple assertions in single line of code
        cy.xpath("//input[@id='lastName']").should('have.attr', 'placeholder', 'Last Name').should('be.visible').type('Gupta').should('have.value', 'Gupta');

        //Enter email
        cy.xpath("//input[@id='email']").type('mark@ts.net').should('have.value', 'mark@ts.net');

        //Enter Phone number
        cy.xpath("//input[@id='number']").type('7028499422').should('have.value', '7028499422');

        //Enter message
        cy.xpath("//textarea[@rows='2']").type('This is a Me').should('have.value', 'This is a Me');



        cy.xpath("(//*[contains(text(),'Simple Form')])[2]").should('include.text', 'Simple')


        //Click submit button
        cy.xpath("//button[@type='submit']").click({force: true})

       

    });
});