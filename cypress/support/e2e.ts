import 'cypress-xpath';
import 'cypress-mochawesome-reporter/register';
// cypress/support/index.ts

Cypress.Commands.add("login", () => {
    cy.visit('/customer/account/login/');
    cy.get('#email').type('masroor.iqbal.buttar@gmail.com');
    cy.get('#pass').type('Mib.109209');
    cy.get('#send2').click();
  
    // Ensure that the session is saved after successful login
    cy.session('userSession', () => {
      cy.visit('/customer/account/');
      // Additional logic to ensure login is successful can be added here
    });
  });
  