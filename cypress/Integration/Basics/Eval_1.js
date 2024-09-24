///<reference types="cypress" />

// const { should } = require("cypress");



describe('Login Process', () => {
    it('Login', () => {
        //Task 1
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        //Enter username
        cy.get("#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div:nth-child(2) > div > div:nth-child(2) > input").type('Admin')


        //Enter Password
        cy.get("#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div:nth-child(3) > div > div:nth-child(2) > input").type('admin123')

        //Click Login
        cy.get("#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div.oxd-form-actions.orangehrm-login-action > button").click();

        //Click on Admin
        cy.get("#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-navigation > aside > nav > div.oxd-sidepanel-body > ul > li:nth-child(1) > a > span").click();


        cy.get("#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-container > div.oxd-layout-context > div > div.oxd-table-filter > div.oxd-table-filter-header > div.oxd-table-filter-header-title > h5").click();

        cy.get("#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-container > div.oxd-layout-context > div > div.oxd-table-filter > div.oxd-table-filter-area > form > div.oxd-form-row > div > div:nth-child(2) > div > div:nth-child(2) > div > div > div.oxd-select-text-input").click();
        
    });
    it('should search select', () =>{
        cy.url().should('include', '/admin');
       

        cy.get("input[placeholder='Type for hints...']").type('Ashutosh Shivhari Ghyar');
        cy.contains('Ashutosh Shivhari Ghyar').click();
    });

    it('verify name', () => {
        cy.url().should('include', '/admin');

        cy.get('table').should('be.visible');
        cy.get('table').contains('td', 'james Butler').should('exist');
    });

    it('Logout', () => {
        cy.url().should('include','/dashboard');

        cy.get('#welcome').click();

        cy.get('a[href="/index.php/auth/logout"]').click();

        cy.url().should('include', '/auth/login');
    });


});