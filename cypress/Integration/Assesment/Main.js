

describe('Automation Test Store Product ', () => {
    it('Visit the Page', () => {
        cy.visit('https://automationteststore.com/')
        // cy.wait(2000);
    });


    it('Navigate the product and Select', () => {
        cy.visit('https://automationteststore.com/index.php?rt=product/category&path=68_70')
        cy.get('body > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(3) > div:nth-child(2) > a:nth-child(1) > img:nth-child(1)').click({force:true});

    });


    it('Modify Product', () => {
        cy.visit('https://automationteststore.com/index.php?rt=product/product&path=68_70&product_id=121')
        cy.get("#option350").select('Light Blue  (996278 In Stock)');

        cy.get("#option351").select('Medium');

        //Change Quantity
        cy.get("#product_quantity").clear().type('2');

        //Clear the Cart
        cy.get(".cart").click();

        //Click on textbox
        cy.get("#cart_checkout1 > i").click();

        //Click
        cy.get('#accountFrm_accountguest').click();

        //Click on Button
        cy.get('#accountFrm > fieldset > button').click()

        //Name
        cy.get('#guestFrm_firstname').type('Mohit');

        //Lastname
        cy.get('#guestFrm_lastname').type("Gupta");

        //Enter Email
        cy.get('#guestFrm_email').type("mohit.48@gmail.com");

        //Enter Number
        cy.get('#guestFrm_telephone').type('7028499422');

        //fax No
        cy.get('#guestFrm_fax').type('5250');

        //Company name
        cy.get('#guestFrm_company').type('Mohit Enterprise');

        //Address1
        cy.get('#guestFrm_address_1').type('Shrirang Nagar');

        //Address2
        cy.get('#guestFrm_address_2').type('Kamla hotel, near kalyan naka');

        //Enter City
        cy.get('#guestFrm_city').type('Bhiwandi');

        //Enter Country
        cy.get('#guestFrm_country_id').select('India');

        //Enter State
        cy.get('#guestFrm_zone_id').select('Maharashtra');

        //Pin code
        cy.get('#guestFrm_postcode').type('421302');

        

        //Click 
        cy.get('.col-md-12 > .btn-orange').click()
        cy.wait(3000);

        cy.get('#checkout_btn > i').click({force: true})

        cy.get('.maintext').should('be.visible', 'Your order has been successfully processed!')
    });



    it('Close Application', () => {
        cy.window().then((win)=>{
            win.close();
        });
    });
});