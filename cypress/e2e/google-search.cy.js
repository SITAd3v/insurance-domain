describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.google.com')
    cy.get('#W0wltc > .QS5gu').click()
    cy.get('#APjFqb').type('Amazon.com')
    cy.contains('Sök på Google').click()
    cy.title().should('eq', 'Amazon.com')
  })
})