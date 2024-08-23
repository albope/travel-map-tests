describe('Verificar la lista de países', () => {
  it('debe mostrar una lista de países correctamente', () => {
    cy.visit('https://travelmapgenerator.com');

    // Esperar explícitamente hasta que la lista de países esté visible
    cy.get('.country-list', { timeout: 10000 }).should('be.visible');

    // Verificar que hay elementos 'label' dentro de la lista de países
    cy.get('.country-list label').should('have.length.greaterThan', 0);
  });
});
