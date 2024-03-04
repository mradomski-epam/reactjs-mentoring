describe('spec.cy.js', () => {
    it('should visit website and click increment button', () => {
        cy.visit('/');
        const incrementButton = cy.get('[data-testid="counter-increment"]');
        incrementButton.click();
        cy.get('[data-testid="counter-value"]').should('have.text', '1');
    })
})
