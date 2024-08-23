describe('Verificar la funcionalidad del botón de descarga', () => {
  it('debe generar y descargar la imagen del mapa al hacer clic en el botón', () => {
    cy.visit('https://travelmapgenerator.com');
    cy.get('.download-button').click();
    cy.readFile('cypress/downloads/Countries_visited.png').should('exist');
  });
});
