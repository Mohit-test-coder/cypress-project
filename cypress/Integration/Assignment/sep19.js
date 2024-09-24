describe('Wait until Hello World is displayed', () => {
    it('Waits for Hello World text', () => {
      cy.visit('https://the-internet.herokuapp.com/dynamic_loading/1');
      
      // Click the start button to begin loading
      cy.get('#start button').click();
      
      // Wait until "Hello World!" is visible
      cy.get('#finish').should('contain.text', 'Hello World');
    });

    it('Fetches values from the 1st table', () => {
        cy.visit('https://the-internet.herokuapp.com/tables');
        
        // Get the 4th row and 3rd column from the first table
        cy.get('#table1 tr:nth-child(4) td:nth-child(3)').then(($cell) => {
          const cellValue = $cell.text();
          cy.log('4th row, 3rd column value: ' + cellValue);
        });
    });

    it('Fetches values from the 2nd table', () => {
        cy.visit('https://the-internet.herokuapp.com/tables');
        
        // Get the 2nd row and last column from the second table
        cy.get('#table2 tr:nth-child(2) td:last-child').then(($cell) => {
          const cellValue = $cell.text();
          cy.log('2nd row, last column value: ' + cellValue);
        });
    });

      it('Waits for 5 seconds', () => {
        cy.visit('https://the-internet.herokuapp.com/tables');
        
        // Explicit wait for 5 seconds
        cy.wait(5000);
        
        // Proceed with further actions
        cy.get('#table1').should('be.visible');
    });

      it('Opens a new window in the same tab', () => {
        cy.visit('https://the-internet.herokuapp.com/windows');
        
        
        cy.get('.example a').invoke('removeAttr', 'target').click();
        
        // Verify the new window content
        cy.url().should('include', '/windows/new');
        cy.get('h3').should('have.text', 'New Window');
    });

    it('Handles all types of alerts', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
        
        // Handle a simple alert
        cy.contains('Click for JS Alert').click();
        cy.on('window:alert', (alertText) => {
          expect(alertText).to.equal('I am a JS Alert');
        });
        
        // Handle a confirm alert
        cy.contains('Click for JS Confirm').click();
        cy.on('window:confirm', (confirmText) => {
          expect(confirmText).to.equal('I am a JS Confirm');
          return true;  // Clicks OK on the confirm dialog
        });
        
        // Handle a prompt alert
        cy.window().then((win) => {
          cy.stub(win, 'prompt').returns('Cypress Test');
          cy.contains('Click for JS Prompt').click();
        });
      });
});
  