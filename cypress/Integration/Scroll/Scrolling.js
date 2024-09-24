describe('Scrolling', () => {
    it('Scrolling operations', () => {

        cy.visit('https://www.google.com/')

        cy.get('#APjFqb').type('Maasai{enter}');

        //x-axis horizontal scrolling
        //y-axis vertical scrolling

        // Scroll down
        cy.scrollTo(0,200) //scroll down

        // Scroll upward
        cy.scrollTo(0,-200) //scroll up

        // Scroll to the element
        cy.contains('Tanzania: Maasai Forcibly Displaced for Game Reserve')
        .scrollIntoView().click()
        
    });
});