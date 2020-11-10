/* eslint-disable mocha/no-global-tests, no-undef */
it('merges task events', () => {
  cy.task('one').should('equal', 'one')
  cy.task('two').should('equal', 'two again')
  cy.task('three').should('equal', 'three')
})
