///<reference types="cypress" />
// Navigation commands
// cy.go() - go back or forward in the browser's history
// cy.visit() - visit a new URL
// cy.reload() - reload the current page
// cy.url() - get the current URL

describe('Navigation Commands', () => {
    it('Visit the website', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        //Click on the Blinking Text
        cy.contains('Free Access to InterviewQues/ResumeAssistance/Material').click()

        cy.get(':nth-child(4) > .new-navbar-highlighter').click(); //Click on the Courses

        //Navigate back to the previous page

        //cy.go(-1) //Go back to the previous page
        //cy.go(1) //Go forward to the next page
        //cy.go('back') //Go back to the previous page
        //cy.go('forward') //Go forward to the next page
        //cy.reload() //Reload the page
        
        cy.wait(2000)
        cy.go('back') //Go back to the previous page

        cy.go('forward') //Go forward to the next page

        cy.reload() //Reload the page

    })
})