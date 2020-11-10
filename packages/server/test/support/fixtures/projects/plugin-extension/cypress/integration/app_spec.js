/* eslint-disable mocha/no-global-tests, no-undef */
it('can inject text from an extension', () => {
  cy.visit('/index.html')
  cy.get('#extension').should('contain', 'inserted from extension!')
})
