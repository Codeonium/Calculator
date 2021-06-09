// https://docs.cypress.io/api/introduction/api.html

describe('calculator', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })
  
  it('should update the display of the running total', () => {
    cy.get('#number2').click();
    cy.get('#operator_multiply').click();
    cy.get('#number2').click();
    cy.get('#operator_multiply').click();
    cy.get('.display').should('contain', '4')
  })
  
  it('should update the display with the result of the operation', () => {
    cy.get('#number7').click();
    cy.get('#operator_add').click();
    cy.get('#number3').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '10')
  })
  
  it('should multiple operations be chained together', () => {
    cy.get('#number2').click();
    cy.get('#operator_multiply').click();
    cy.get('#number2').click();
    cy.get('#operator_multiply').click();
    cy.get('#number2').click();
    cy.get('#operator_multiply').click();
    cy.get('#number2').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '16')
  })
  
  it('should output as expected for a decimal numbers', () => {
    cy.get('#number5').click();
    cy.get('#operator_divide').click();
    cy.get('#number2').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '2.5')
  })
  
  it('should output as expected for negative numbers', () => {
    cy.get('#number5').click();
    cy.get('#operator_subtract').click();
    cy.get('#number7').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '-2')
  })
  
  it('should output as expected for a large number', () => {
    cy.get('#number9').click();
    cy.get('#operator_multiply').click();
    cy.get('#operator_multiply').click();
    cy.get('#operator_multiply').click();
    cy.get('#operator_multiply').click();
    cy.get('#operator_multiply').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '3.4336838202925124e+30')
  })
  
  it('should return error when divided by 0', () => {
    cy.get('#number2').click();
    cy.get('#operator_divide').click();
    cy.get('#number0').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', 'Error')
  })
  
  it('should return zero when multiplied by 0', () => {
    cy.get('#number2').click();
    cy.get('#operator_multiply').click();
    cy.get('#number0').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '0')
  })
})
