// cypress/support/commands.d.ts

// Ensure this is declared as an ambient module
declare namespace Cypress {
    interface Chainable {
      login(): Chainable<Element>; // This defines the `login` method for chaining
    }
  }
  