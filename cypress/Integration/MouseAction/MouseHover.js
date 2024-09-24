///<reference types="cypress" />
///<reference types="cypress-xpath" />

describe('Mouse Hover', () => {
    it('Mouse Hover', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        //Mouse Hover- invoke()
        //invoke() is used to show the hidden element
        cy.get('#mousehover').invoke('show');
        cy.wait(1000);

        //Mouse Hover- contains()
        //force click is used when the element is not clickable
        cy.contains('Top').click({force: true});

        cy.url().should('include', 'top'); //verify the url
        
    });
    
    it('Mouse Hover-2', () => {
        
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        //Mouse Hover- trigger()
        cy.get('#mousehover').trigger('mouseover'); //trigger() is used to perform mouse hover
        cy.wait(1000);

        //Mouse Hover- contains()
        cy.contains('Reload').click({force: true});

        cy.url().should('include', 'AutomationPractice'); //verify the url
    })
})