describe('/404', () => {
  beforeEach(() => cy.visit('/not-found-page-12313908123812038012831280381238', { failOnStatusCode: false}));
  it('should reach a 404 if no page is found', () => {
    cy.get('[data-cy=404]').contains('404 - Page Not Found')
  })
})
