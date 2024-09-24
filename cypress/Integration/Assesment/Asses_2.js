describe('ebay Advance Search Automation', () => {
    it('TestCase1', () => {

        //Task 1 - Visiting the website using url
        cy.visit('https://www.ebay.com/')
        cy.wait(2000);

        //Task 2 - clicking on Advanced link 
        cy.get("#gh-as-a").click()

        //Task 3 - Selecting the category and typing minimum and maximum price
        cy.get('[data-testid="s0-1-17-4[0]-7[3]-_sacat"]').select('Computers/Tablets & Networking',{force: true})
        cy.wait(2000);
        cy.get('[id="s0-1-17-5[2]-@range-comp[]-@range-textbox[]-textbox"]').type('100') // minimum
        cy.get('[id="s0-1-17-5[2]-@range-comp[]-@range-textbox[]_1-textbox"]').type('500') //maximum
        cy.wait(2000)

        // //Task 4 - removing the target attribute and clicking on the button so that window is not targeting to another page
        cy.get('a[href="/help/buying/search-tips/advanced-search?id=4049"]').first().invoke('removeAttr', 'target').click()

        //Task 5 - Asserting to see if page is having text
        cy.on('window:open', (win) =>{
            cy.wrap(win).its('document').should('include.text', 'Customer Service')

            win.close()
        })

        //Going back to parent/ search page
        cy.go('back')
        cy.wait(2000)

        //Task 6 - searching laptop and adding filter
        cy.get('input[id="_nkw"]').type('laptop')
        cy.get('select[id="s0-1-17-6[7]-5[@field[]]-_salic"]').select('Germany')
        cy.get('input[id="s0-1-17-6[4]-[0]-LH_ItemCondition"]').click()
        cy.wait(2000)

        //Task 7 - Clicking on search button
        cy.get('body > div.page-grid-container > div > main form  > div > button').click()
        cy.wait(2000)

        //Task 8
        cy.get('input[id="gh-ac"]').clear().type('Mohit')
        cy.get('#gh-btn').click()
        cy.contains('No exact matches found').should('be.visible')
        cy.wait(2000)

        //Task 9 

        cy.end()
    });
});

