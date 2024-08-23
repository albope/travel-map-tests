describe('Verificar la web de Travel Map Generator', () => {
  it('debe cargar la página y verificar el título', () => {
    cy.visit('https://travelmapgenerator.com');
    cy.title().should('include', 'Travel map Generator'); // Ajusta aquí si es necesario
  });

  it('Verificar que el mapa está presente en la página', () => {
    cy.visit('https://travelmapgenerator.com');
    cy.get('#map-container').should('be.visible');
  });
});
