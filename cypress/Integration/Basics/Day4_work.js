///<reference types="cypress" />
require('cypress-xpath');

describe('Automation', () => {
    it('Successful message', () => {

        Cypress.on('uncaught:exception', (err, runnable) => {
            // return false to prevent the test from failing
            return false;
          });
          

        cy.visit('https://automationteststore.com/index.php?rt=content/contact')

        cy.get('[id="ContactUsFrm_first_name"]').type('Mohit')

        cy.get('[id="ContactUsFrm_email"]').type('mohit@gmail.com')

        cy.get('[id="ContactUsFrm_enquiry"]').type('This is a test message')

        cy.get('[title="Submit"]').click()

        // Use XPath to find the success message and assert its visibility and text
        cy.xpath("//p[.='Your enquiry has been successfully sent to the store owner!']")
          .should('be.visible')
          .and('have.text', 'Your enquiry has been successfully sent to the store owner!');
    });
});
