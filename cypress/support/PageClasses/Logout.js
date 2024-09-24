class Logout {
    
    logouttoApp() {

        cy.wait(2000);
        cy.get('.oxd-userdropdown-tab').click();
        

        cy.get('.oxd-dropdown-menu').find('.oxd-userdropdown-link').each(($ele)=>{
   
        
            if($ele.text()=='Logout') {
        
                cy.wrap($ele).click();
            }
        });

        // cy.get('.oxd-userdropdown-link').contains('Logout').click({force: true});
        
       
    }
}

export default Logout;


// cy.get('.oxd-userdropdown-name').find('oxd-dropdown-menu').each(($ele)=>{
//     cy.wait(2000);

//     if($ele.text()=='Logout') {

//         cy.wrap($ele).click();
//     }
// });