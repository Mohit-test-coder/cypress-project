///<reference types="cypress" />
///<reference types="cypress-xpath" />

//Drag and Drop - is a user action that involves moving an item from one location to another.

describe('Drag and Drop', function () {
    it('Tc-01', function () {

        cy.visit('https://v1.training-support.net/selenium/drag-drop')

        //Locators for elements 1 -ball

        //mouseDown() - simulates pressing the left mouse button down Click and hold the mouse button down without releasing it.
        //trigger() - triggers an event on the selected element.
        //which:1 - specifies the left mouse button to be pressed.
        //Which:2 - specifies the middle mouse button to be pressed.
        //Which:3 - specifies the right mouse button to be pressed.

        cy.get('#draggable').trigger('mousedown', {which:1})

        //Locators for elements 2 - box

        //mouseover() - simulates moving the mouse to a specific location.
        //mouseup() - simulates releasing the left mouse button.

        cy.get('#droppable').trigger('mousemove').trigger('mouseup',{force:true})

        //Move the ball to the another box
        cy.get('#draggable').trigger('mousedown', {which:1})

        cy.get('#dropzone2').trigger('mousemove').trigger('mouseup',{force:true})



    });
})