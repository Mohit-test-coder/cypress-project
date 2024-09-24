///<reference types="cypress" />

// Hooks are used to perform some actions before and after the test cases

//before - we will use this hook to perform some actions before the test cases- Single configuration , data setup, not for login

//beforeEach - we will use this hook to perform some actions before each test cases - Multiple configuration , data setup, for login

describe('Hooks Demo', ()=> {

    beforeEach(()=> {
         // visit the website
         cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        
         // Enter username
         cy.get("[name='username']").type("Admin")
 
         // Enter password
         cy.get("[placeholder='Password']").type("admin123")
 
         // Click on login button
         cy.get('.oxd-button').click();
        
    });

    it('TC_01', ()=> {
        // Click on Admin tab
        cy.contains('Admin').click();

        //Check url after clicking on admin tab
        cy.url().should('include','admin');
    });

    it('TC_02', ()=> {
        cy.wait(2000);
        // Click on Leave tab
        cy.contains('Leave').click();

        //Check url after clicking on Leave tab
        cy.url().should('include','leave'); // include.text is used to check if the url contains the text
    });

    afterEach(()=> {
        cy.wait(3000);
        // Logout
        cy.get('.oxd-userdropdown-tab').click();

        // cy.xpath('.//a[.="Logout"]').click();

        cy.contains('Logout').click();
    })
    
})