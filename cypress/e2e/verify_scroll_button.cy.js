describe('Verificar la funcionalidad del botón "Scroll Down to Share/Download"', () => {
  it('debe desplazar la página a la sección de acciones al hacer clic en el botón', () => {
    cy.visit('https://travelmapgenerator.com');
    cy.get('button').contains('Scroll Down to Share/Download').click();
    cy.get('#actions-section').should('be.visible');
  });
});