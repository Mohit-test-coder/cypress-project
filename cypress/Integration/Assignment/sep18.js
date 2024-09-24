describe('Handling Iframes with Cypress', () => {
    it('Interact with iframe content', () => {
      cy.visit('https://the-internet.herokuapp.com/iframe');
      
      // Access the iframe using cy.iframe() method
      cy.frameLoaded('#mce_0_ifr'); 
      
      // Now interact with the content inside the iframe
      cy.iframe().find('p').clear().type('Cypress is awesome!');
      
      // Assert the content inside the iframe
      cy.iframe().find('p').should('contain.text', 'Cypress is awesome!');
    });

    it('Double clicks on the element', () => {
        cy.visit('http://api.jquery.com/dblclick/');
        
        // Perform the double click
        cy.get("//div[@class='demo code-demo']//iframe") 
          .dblclick();
      });

      it('Right clicks on the context menu', () => {
        cy.visit('https://the-internet.herokuapp.com/context_menu');
        
        // Perform the right click
        cy.get('#hot-spot').rightclick();
        
        // Verify the alert text after the right-click
        cy.on('window:alert', (alertText) => {
          expect(alertText).to.equal('You selected a context menu');
        });
      });

      it('Triggers mouse hover', () => {
        cy.visit('https://the-internet.herokuapp.com/hovers');
        
        // Hover over the first figure
        cy.get('.figure').first().trigger('mouseover');
        
        // Verify the caption appears
        cy.get('.figcaption').first().should('be.visible').and('contain', 'name: user1');
      });

      it('Drags and drops an element', () => {
        cy.visit('https://the-internet.herokuapp.com/drag_and_drop');
        
        // Perform drag and drop
        cy.get('#column-a').drag('#column-b');
        
        // Verify the columns have been swapped
        cy.get('#column-b').should('contain.text', 'A');
      });

      beforeEach(() => {
        cy.visit('https://the-internet.herokuapp.com/login');
      });
    
      it('Performs login with multiple user data', () => {
        cy.fixture('loginData.json').then((users) => {
          users.forEach((user) => {
            // Fill in the login form with user data
            cy.get('#username').type(user.username);
            cy.get('#password').type(user.password);
            cy.get('.radius').click();
            
            // Verify login outcome
            if (user.valid) {
              cy.get('h2').should('contain', 'Secure Area');
            } else {
              cy.get('#flash').should('contain', 'Your username is invalid!');
            }
    
            // Return to login page for next iteration
            cy.visit('https://the-internet.herokuapp.com/login');
          });
        });
      });
  });
  