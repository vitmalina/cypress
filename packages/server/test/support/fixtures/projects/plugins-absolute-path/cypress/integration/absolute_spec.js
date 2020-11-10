/* eslint-disable mocha/no-global-tests, no-undef */
it('uses the plugins file', () => {
  cy.task('returns:arg', 'foo').should('equal', 'foo')
})
