import 'cypress-wait-until';

describe('Verificar la actualización del mapa', () => {
  it('debe permitir seleccionar Angola y mostrarlo en el mapa', () => {
    cy.visit('https://travelmapgenerator.com');

    // Seleccionar Angola en la lista de países
    cy.get('.country-list').contains('Angola').find('input[type="checkbox"]').check().should('be.checked');

    // Esperar hasta que el país Angola en el mapa tenga el color correcto
    cy.waitUntil(() => 
      cy.get('.leaflet-container .leaflet-interactive')
        .then($el => {
          return Cypress.$($el).filter((i, el) => {
            const fillColor = el.getAttribute('fill');
            return fillColor === '#FF0000';
          }).length > 0;
        }),
      {
        timeout: 10000, // Tiempo máximo de espera
        interval: 500   // Intervalo de chequeo
      }
    ).then(() => {
      // Verificación final: asegurarse de que Angola esté marcado con el color correcto
      cy.get('.leaflet-container .leaflet-interactive')
        .filter((i, el) => el.getAttribute('fill') === '#FF0000')
        .should('have.length.greaterThan', 0);
    });
  });
});
