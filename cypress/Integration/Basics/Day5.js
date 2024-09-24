///<reference types="cypress" />


describe('OrangeHRM', () => {
    it('Test using - expect', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

        //Enter username
        cy.get('input[placeholder="Username"]').then(($input)=>{

            expect($input).to.have.attr('name','username').to.have.attr('placeholder','Username'); 
            
            //if i want to type inside username

            // if we want to interact with the element we have to convert jquery object to cypress object
            cy.wrap($input).type('Admin');
        })

        //Enter password
        cy.get('[name="password"]').then(($pass)=>{
            expect($pass).to.have.attr('name','password').to.have.attr('placeholder','Password');

            cy.wrap($pass).type('admin123');
            
        })

        //Click on login button
        cy.get('.oxd-button').then(($Login)=>{
            expect($Login).to.have.text(' Login ').to.have.attr('type','submit');

            cy.wrap($Login).click();
        })

        cy.wait(2000); // wait for 2 seconds
        
        //Logout 
        //Click on element dropdown
        cy.get('.oxd-userdropdown-name').click();

        //we have to iterate over the list of elements using each method
        cy.get('.oxd-dropdown-menu ').find('[role="menuitem"]').each(($ele)=>{
            if($ele.text()=='Logout') {

                cy.wrap($ele).click();
            }
        })
    })
});