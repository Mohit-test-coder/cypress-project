///<reference types="cypress" />


describe('Alert', () => {
    it('Check Alert', () => {

        var name = 'Ganesh'
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.get('#name').type(name)

        cy.get('#alertbtn').click();

        // I want to Accept the Alert
        // I want to Assert the Alert text message
        cy.on('window:alert', (text) => {

            expect(text).to.contains(name);
            
        })

        // I want to Accept the Alert
        cy.get('#confirmbtn').click();

        // I want to Assert the Alert text message
        // I want to Accept the Alert
        cy.on('window:confirm', (text) => {

            expect(text).to.contains('Hello , Are you sure you want to confirm?');

            // return true; // To click on OK button
            return false; // To click on Cancel button
            
        })


    });
});