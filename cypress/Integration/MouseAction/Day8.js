///<reference types="cypress" />
///<reference types="cypress-xpath" />

//Mouse Action
//Right Click -> contextmenu
//Double Click -> dblclick
//Drag and Drop -> drag
//Scrolling -> scroll
//Hover -> hover
//Mouse Over -> mouseover
//Mouse Out -> mouseout
//Mouse Down -> mousedown
//Mouse Up -> mouseup
//Click -> click


describe('Mouse Action', () => {
    it('Right Click', () => {
        
        cy.visit('https://demo.guru99.com/test/simple_context_menu.html');

        cy.xpath('//*[contains(text(),"right click me")]').rightclick();
        cy.wait(2000);

        //click on quit
        cy.get('.context-menu-icon-quit > span').click();
        cy.wait(2000);

        //Double Click
        cy.xpath('//*[contains(text(),"Double-Click Me To See Alert")]').dblclick();

    })
    
});