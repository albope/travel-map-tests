describe('Verificar la carga de la lista de países', () => {
  it('debe cargar y mostrar la lista de países', () => {
    cy.visit('https://travelmapgenerator.com');
    cy.get('#country-selector-container').should('exist');
    cy.get('.country-list').find('li').should('have.length.greaterThan', 0);
  });
});