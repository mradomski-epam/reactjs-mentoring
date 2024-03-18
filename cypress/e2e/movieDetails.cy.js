describe('browsing movie details page', () => {
    const movieId = '399035';

    it('should visit movie details page', () => {
        cy.visit(`/movies/${movieId}`);
        cy.url().should('include', movieId);
    });
    it('should click on movie tile and go to details route', () => {
        cy.visit(`/movies/${movieId}`);
        cy.get('.MovieDetails__image').click();
        cy.url().should('eq', 'http://localhost:3000/?sortOrder=asc');
    });
})
