describe('Verificar la página About', () => {
    it('debe permitir acceder a la página About desde el menú', () => {
      cy.visit('https://travelmapgenerator.com');
  
      // Abrir el menú
      cy.get('.hamburger-menu').click();
  
      // Hacer clic en la opción "About"
      cy.contains('About').click();
  
      // Verificar que la URL es la correcta
      cy.url().should('include', '/about');
  
      // Verificar que la página About se despliega correctamente
      cy.get('h2').should('contain', 'About this Project'); // Verificación actualizada
    });
  });  