describe('Verificar la página Blog', () => {
    it('debe permitir acceder a la página Blog desde el menú', () => {
      cy.visit('https://travelmapgenerator.com');
  
      // Abrir el menú
      cy.get('.hamburger-menu').click();
  
      // Hacer clic en la opción "Blog"
      cy.contains('Blog').click();
  
      // Verificar que la URL es la correcta
      cy.url().should('include', '/blog');
  
      // Verificar que la página Blog se despliega correctamente
      // Aquí verificamos que el título "Travel Blog" se muestra en el h1.
      cy.get('h1.blog-title').should('contain.text', 'Travel Blog');
    });
  });
  