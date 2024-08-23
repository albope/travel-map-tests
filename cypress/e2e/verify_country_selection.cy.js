describe('Verificar la selección y deselección de países', () => {
  it('debe permitir seleccionar y deseleccionar un país', () => {
    cy.visit('https://travelmapgenerator.com');
    cy.get('.country-list').contains('Angola').find('input[type="checkbox"]').check().should('be.checked');
    cy.get('.country-list').contains('Angola').find('input[type="checkbox"]').uncheck().should('not.be.checked');
  });
});