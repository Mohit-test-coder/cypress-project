///<reference types="cypress-xpath" />

describe('Table', () => {
    it('Table', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.xpath("//table[@id='product']/tbody/tr[10]/td[2]").then(($ele)=> {

            //cy.log is used to print the text in the console
            cy.log($ele.text())

            //text() is used to get the text from the element
            var text = $ele.text()
            cy.log(text)
        })
    });


        // Deal with multiple values in your web table- iterate through the table and get the values, 
        //compare with the expected value and print the result, if it matches then print the result, it will print the next value
    it('Table', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.xpath("//table[@id='product']/tbody/tr[8]/td").each(($elem)=> {

            if ($elem.text().includes('Bugzilla')){
                
                //next() is used to get the next element in the table
                cy.wrap($elem).next().then(($element)=>{

                    //text() is used to get the text from the element
                    var text1= $element.text()

                    cy.log(text1)

                })
            }
        });
    });

    it('Table', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.xpath("//table[@id='product']/tbody/tr[7]/td").each(($elem)=> {

            if ($elem.text().includes('Businessman')){
                
                //next() is used to get the next element in the table
                cy.wrap($elem).next().then(($element1)=>{

                    //text() is used to get the text from the element
                    var text2= $element1.text()

                    cy.log(text2)

                })
            }
        });
    });
})


