class Links {
    

    // Methods to click on links
    
    clickOnLink(linktext) {

        // Passing the text of the link from my it block and, clicking on it
        cy.contains(linktext).click()
        
    }

}

export default Links;