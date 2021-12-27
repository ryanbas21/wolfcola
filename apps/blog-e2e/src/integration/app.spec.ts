describe('blog', () => {
  beforeEach(() => cy.visit('/'));

  it('it should find the title of the page', () => {
    cy.get('[data-cy=title]').contains('Ryan\'s Ramblings')
  });
  it('should should find the title of a post', () => {
    console.log(cy.get('[data-cy=post-title]'))
    cy.get('[data-cy=post-title]').contains('Intro To')
  })
  it('should should find the tags of a post', () => {
    cy.get('[data-cy=post-tags]').contains('FP')
  })
  it('should should find the tags of a post', () => {
    cy.get('[data-cy=post-date]').contains('2018')
  })
  it('should should find the tags of a post', () => {
    cy.get('[data-cy=footer]').contains('Sorry for posting')
  })
  it('should click a post', () => {
    cy.get('[data-cy=post]').click(); 
    cy.location('pathname', { timeout: 10000 }).should('contain', '/posts/')
  })
});
