describe('should add query parameters when changing filters', () => {
   it('should visit website, enter search query and have query in url params', () => {
       cy.visit('/');
       cy.get('input[placeholder=\"What do you want to search?\"]').type('testing');
       cy.get('form').submit();
       cy.url().should('include', 'search=testing');
       cy.contains('documentary').click();
       cy.location().should((loc) => {
           expect(loc.search).to.contain('documentary');
       });
       cy.get('.SortControl__select').click();
       cy.wait(100);
       cy.contains('Title').click({ force: true });
       cy.url().should('include', 'title');
   });
});



