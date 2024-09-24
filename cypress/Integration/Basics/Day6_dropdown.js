///<reference types="cypress" />

describe('Dropdown', () =>{

    it('Dropdown using value, text and index', () =>{
        
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        //handle dropdown using value
        cy.get('#dropdown-class-example').select('option1') // Value is in small letter
        .should('have.value', 'option1')
        // cy.wait(2000)

        //handle dropdown using text
        cy.get('#dropdown-class-example').select('Option2') //Text is in capital letter
        .should('have.value', 'option2')
        // cy.wait(2000)

        //handle dropdown using index
        cy.get('#dropdown-class-example').select(3)
        .should('have.value', 'option3')
        // cy.wait(2000)

        cy.get('#dropdown-class-example').select('').should('have.value', '');
        // cy.wait(2000)
    })
   

    it('Dynamic Dropdown test', () =>{

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        //Step - Locator foe suggestion class then keyboard event

        cy.get('[placeholder="Type to Select Countries"]').type('ind'); 

        // Step - Find the suggestion list and click on India and iterate through the list
        //Iterate using each()
        // Wrap the element and click on it
        cy.get('#ui-id-1').find('.ui-menu-item').each(($elm)=>{
            
            // find the text and click on it
            if($elm.text() === 'India'){
                cy.wrap($elm).click()
            }

        })
        cy.wait(2000)
    })
    

    it('Dynamic Dropdown test', () =>{
        
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        cy.get('[placeholder="Type to Select Countries"]').type('aus');

        cy.get('.ui-menu-item').each(($elm)=>{

            // find the text and click on it
            if($elm.text() === 'Australia'){
                cy.wrap($elm).click()
            }
        })


        // easy way to select dynamic dropdown
        cy.get('[placeholder="Type to Select Countries"]').clear().type('chi');

        //Select a dynamic dropdown using contains() method
        cy.get('.ui-menu-item').contains('China').click()
    });
})