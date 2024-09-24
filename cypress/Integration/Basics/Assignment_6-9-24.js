///<reference types="cypress" />
require('cypress-xpath');

describe('Books to Scrape - Test Automation', () => {

    // Test Case 1: Verify Page Title
    it('Verify that the page title is "My Store"', () => {
        cy.visit('https://books.toscrape.com/')
        cy.title().should('eq', 'All products | Books to Scrape - Sandbox')  // Verify the page title
    })

    it('Click on "Non Fiction" link and verify the results page', () => {
        cy.visit('https://books.toscrape.com/catalogue/category/books/nonfiction_13/index.html')
        
        // Verify URL contains 'category/books/nonfiction'
        cy.url().should('include', 'category/books/nonfiction')

        // Verify the page contains 'Nonfiction' in the heading
        cy.get('h1').should('contain', 'Nonfiction')
    })

    // Test Case 3: Add to Basket
    it('Add a product to the basket', () => {
        cy.visit('https://books.toscrape.com/')
        cy.get('.product_pod').first().click()  // Click on the first product
        cy.contains('button', 'Add to basket').click(); // Add the product to the basket
        cy.get('.alert').should('contain', 'Warning!')  
    })
})
