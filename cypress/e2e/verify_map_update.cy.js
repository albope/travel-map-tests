describe('Verificar que el mapa se actualiza al seleccionar países', () => {
  it('debe resaltar el país seleccionado en el mapa', () => {
    cy.visit('https://travelmapgenerator.com');
    cy.get('.country-list').contains('Angola').find('input[type="checkbox"]').check();
    cy.get('.leaflet-container').should('contain', 'Angola');
  });
});