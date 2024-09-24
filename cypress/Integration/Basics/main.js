//Describe is a Test Suite - collection of tests

//it block is a test case/  single 
describe('Login', () => {
    it('LoginTest', () => {
        
        //I want to open browser and go to the url

        //Visit() is a to Pass the URL

        //cy is cypress object
        
        cy.visit("https://www.google.com");
        
    });

    // it('heroku', () => {

    //     cy.visit("https://the-internet.herokuapp.com/login");

    //     //Enter username
    //     //cy.get is use to write and find the locator of the element
    //     cy.get('#username').type('tomsmith');

    //     //Enter password
    //     //type is use to write the value in the field
    //     cy.get('#password').type('SuperSecretPassword!');

    //     //Click on login button
    //     //click is use to click on the element
    //     cy.get('.fa').click();
        
    // })

});