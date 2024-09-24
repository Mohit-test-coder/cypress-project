describe('uploading', () => {
    it('test case', () => {
        
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.wait(2000);

        cy.get('#file-upload').selectFile('C:/Users/mohit/Desktop/mohit.jpeg.lnk')
        cy.wait(2000);

        cy.get('.button').click()



    });
});