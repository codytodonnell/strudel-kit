describe('The Process Design Task Flow', () => {
  beforeEach(() => {
    cy.visit('/process-design');
  });

  it('successfully loads', () => {
    cy.get('h1').contains('Process Design Projects');
  });

  it('creates a new process design', () => {
    cy.get('button[data-testid="pd-new-button"]').click();
    cy.get('button[data-testid="pd-create-button"]').click();
    cy.get('.MuiStepLabel-label').first().should('have.class', 'Mui-active');
    cy.get('.MuiStepLabel-label').eq(1).should('have.class', 'Mui-disabled');
    cy.get('.MuiStepLabel-label').eq(2).should('have.class', 'Mui-disabled');
    cy.get('button[data-testid="pd-solver-next-button"]').click();
    cy.get('button[data-testid="pd-run-button"]').click();
    cy.get('h2').contains('Running');
    cy.wait(5000);
    cy.get('button[data-testid="pd-results-button"]').click();
    cy.get('.MuiStepLabel-label').first().should('have.class', 'Mui-completed');
    cy.get('.MuiStepLabel-label').eq(1).should('have.class', 'Mui-completed');
    cy.get('.MuiStepLabel-label').eq(2).should('have.class', 'Mui-active');
    cy.get('.js-plotly-plot').should('have.length', 2);
  });

  it('goes back to the project list', () => {
    cy.get('button[data-testid="pd-new-button"]').click();
    cy.get('button[data-testid="pd-create-button"]').click();
    cy.get('a[data-testid="pd-list-link"]').click();
    cy.get('button[data-testid="pd-new-button"]');
  });
});