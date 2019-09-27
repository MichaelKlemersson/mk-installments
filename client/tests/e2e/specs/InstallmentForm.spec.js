// https://docs.cypress.io/api/introduction/api.html

describe('Test InstallmentForm', () => {
  it('Visits the app root url and see the form', () => {
    cy.visit('/');
    cy.get('.installment-form').should('exist');
  });

  it('Input invalid data and see errors', () => {
    cy.visit('/');
    cy.get('.installment-form .amount.field').type(-100);
    cy.get('#amount-field-validation').should('be.visible');

    cy.get('.installment-form .times.field').type(0);
    cy.get('#times-field-validation').should('be.visible');
  });

  it('Input valid data and see the result', () => {
    cy.server();
    cy.visit('/');
    cy.route('POST', '/api/v1/installments').as('splitPayment');
    cy.get('.installment-form .amount.field').type(100);
    cy.get('#amount-field-validation').should('not.be.visible');

    cy.get('.installment-form .times.field').type(2);
    cy.get('#times-field-validation').should('not.be.visible');

    cy.get('button:visible').click();

    cy.wait('@splitPayment').then(() => {
      cy.get('#installment-final-amount').should('contain', '50.00');
    });
  });
});
