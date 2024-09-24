///<reference types="cypress-xpath" />


describe('iframes', () => {
    it('test case 1', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        //cy.frame loaded is used to load the iframe

        cy.frameLoaded('#courses-iframe')

        // Using iframe to access the element and checking for Blog element and clicking on it
       cy.iframe().contains('Blog').click()

    //    cy.iframe().find("a[href='mentorship']").click({multiple:true})
    });

    it('test case 2', () => {
        
        cy.visit('https://v1.training-support.net/selenium/iframes')

        //cy.frameLoaded is used to load the iframe and then using iframe to access the element and clicking on it
        // cy.frameLoaded('iframe[src="/selenium/frame1"]')

        // Using find()- providing locator and clicking on first element using first()
        cy.iframe('iframe[src="/selenium/frame1"]').find('#actionButton').first().click()
    })
});