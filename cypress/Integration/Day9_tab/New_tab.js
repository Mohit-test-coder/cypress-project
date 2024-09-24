///<reference types="cypress-xpath" />

describe('New tab', function () {
    it('New tab', function () {

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        //Remove the target attribute from the link to open in new tab

        //Open the link in new tab
        // cy.xpath("//a[@id='opentab']").click()

        //Open the link in same tab
        cy.xpath("//a[@id='opentab']").invoke('removeAttr', 'target').click()


        //To work on different tabs/origins we use cy.origin
        //cy.origin is helpful when we have to work on different domains
        cy.origin('https://www.qaclickacademy.com/', () => {
            
            cy.contains('Courses').click()

            cy.log(cy.url())
        })

        cy.log(cy.url())
    });

    it.only('New tab 2', function () {

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        //Remove the target attribute from the link to open in new tab

        //Open the link in same tab
        cy.get("#openwindow").invoke('removeAttr', 'onclick').click()


        //To work on different tabs/origins we use cy.origin
        //cy.origin is helpful when we have to work on different domains

        cy.origin('https://www.qaclickacademy.com/', () => {
            
            cy.contains('Courses').click()

            cy.log(cy.url())
        })

        // cy.log(cy.url())
    });


})