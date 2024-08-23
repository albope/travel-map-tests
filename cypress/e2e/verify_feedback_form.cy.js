describe('Verificar el formulario de feedback', () => {
  it('debe abrir el modal de feedback, permitir el envío de comentarios y cerrarlo', () => {
    cy.visit('https://travelmapgenerator.com');
    cy.get('.feedback-button').click();
    cy.get('.feedback-modal').should('be.visible');
    cy.get('.feedback-modal textarea').type('This is a test feedback.');
    cy.get('.submit-feedback').click();
    cy.get('.feedback-modal').should('not.exist');
  });
});
