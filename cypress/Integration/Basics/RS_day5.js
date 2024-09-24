///<reference types="cypress" />

describe('RS', () => {
    it('CheckBox', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        
        cy.url().should('include', 'AutomationPractice')

        cy.get('#checkBoxOption1').check().should('be.checked'); //Asserting if the checkbox is checked
        cy.get('#checkBoxOption2').check().should('be.checked'); //Asserting if the checkbox is checked
        cy.get('#checkBoxOption3').check().should('be.checked'); //Asserting if the checkbox is checked

        cy.get('#checkBoxOption1').uncheck().should('not.be.checked'); //Asserting if the checkbox is unchecked
        cy.get('#checkBoxOption2').uncheck().should('not.be.checked'); //Asserting if the checkbox is unchecked
        cy.get('#checkBoxOption3').uncheck().should('not.be.checked'); //Asserting if the checkbox is unchecked
        
    });

    it('hide/show', () =>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        //Asserting if the element is visible
        cy.get('[name="show-hide"]').should('be.visible');

        //Clicking on the hide button
        cy.get('#hide-textbox').click();

        //Asserting if the element is hidden
        cy.get('[name="show-hide"]').should('not.be.visible');

        cy.get('#show-textbox').click();

        //Again if the element is visible
        cy.get('#show-textbox').should('be.visible');

        cy.get('#displayed-text').type('Hello World');


    })

    it('Radio Button', () =>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.get('[value="radio1"]').click().should('be.checked');
        cy.get('[value="radio2"]').click().should('be.checked');
        cy.get('[value="radio3"]').click().should('be.checked');
    })

    
});