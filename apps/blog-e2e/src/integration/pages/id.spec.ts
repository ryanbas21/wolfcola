describe('/${id}', () => {
  beforeEach(() => cy.visit('/posts/dooXIsJlEsnorfQ2KZExD'));

  it('should find the title of the post', () => {
    cy.get('[data-cy=post-title]').contains('Intro To')
  })
  it('should find a heading of the post', () => {
    cy.get('[data-cy=post-heading]').contains('What is Functional');
  })
  it('should find code blocks', () => {
    cy.get('[data-cy=code-blocks]').contains('const')
  })
})
