describe('browsing movie list page', () => {
   it('should visit website, enter search query and have query in url params', () => {
       cy.visit('/');
       cy.get('input[placeholder=\"What do you want to search?\"]').type('testing');
       cy.get('form').submit();
       cy.url().should('include', 'search=testing');
   });
    it('should visit website, click genre button and have genre filter in query', () => {
        cy.visit('/');
        cy.contains('.GenreSelect__list__item__button', 'documentary').click();
        cy.wait(500);
        cy.location().should((loc) => {
           expect(loc.search).to.contain('documentary');
        });
    });
    it('should visit website, change sort criteria and have it reflected in url query', () => {
        cy.visit('/');
        cy.get('.SortControl__select').click();
        cy.wait(100);
        cy.get('span.react-dropdown-select-item').contains('Title').click({ force: true });
        cy.wait(500);
        cy.url().should('include', 'title');
    })
});


describe('browsing movie details page', () => {
    const movieId = '399035';

    it('should visit movie details page', () => {
        cy.visit(`/movies/${movieId}`);
        cy.url().should('include', movieId);
    });
    it('should click on movie tile and go to details route', () => {
        cy.visit(`/movies/${movieId}`);
        cy.get('.MovieDetails__image').click();
        cy.wait(1000);
        cy.url().should('eq', 'http://localhost:3000/?sortOrder=asc');
    });
})
