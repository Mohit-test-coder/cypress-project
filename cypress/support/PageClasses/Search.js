class Search {
    
    search(keyword) {
        cy.get('.oxd-input--active').type(keyword);

        cy.contains(keyword).click();
    }
}

export default Search;