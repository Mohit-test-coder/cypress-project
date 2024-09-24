///<reference types="cypress-xpath" />

describe('Using Data Driven approach', () => {
      //Define before hook

    before(() => {
            
        // code to connect to the database and fetch the data
        // then is used to wait for the data to be fetched
        cy.fixture('example.json').then((data) => {
            
            // Initialize my data, i have make global variable
            
            globalThis.data = data; // globalThis is used to make the data available globally and act like a local variable

        })
        

    });

    it('Test Case 1', () => {

         // visit the website
         cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        
         // Enter username
         // using data variable to fetch the values of username and password from the json file
         cy.get("[name='username']").type(data.username)
 
         // Enter password
         cy.get("[placeholder='Password']").type(data.password)
 
         // Click on login button
         cy.get('.oxd-button').click()
      
        
    });

    it('Test Case 2', () => {

        // visit the website
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
       
        // Enter username
        // using data variable to fetch the values of username and password from the json file
        cy.get("[name='username']").type(data.invalidUsername)

        // Enter password
        cy.get("[placeholder='Password']").type(data.invalidPassword)

        // Click on login button
        cy.get('.oxd-button').click()
     
       
   });
});