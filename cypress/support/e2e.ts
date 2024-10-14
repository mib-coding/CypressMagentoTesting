import 'cypress-xpath';
import 'cypress-mochawesome-reporter/register';
//import Cookies from cypress;
// cypress/support/index.ts

// Cypress.Commands.add("login", () => {
//     cy.visit('/customer/account/login/');
//     cy.get('#email').type('masroor.iqbal.buttar@gmail.com');
//     cy.get('#pass').type('Mib.109209');
//     cy.get('#send2').click();
  
//     // Ensure that the session is saved after successful login
//     cy.session('userSession', () => {
//       cy.visit('/customer/account/');
//       // Additional logic to ensure login is successful can be added here
//     });
//   });
  
//   // Set cookie preservation
// Cypress.Cookies.defaults({
//   preserve: (cookie) => {
//     // Example logic: Preserve only specific cookies
//     // Replace the 'your_cookie_name' with actual cookie names you want to preserve
//   return true;  },
// });

// Cypress.Cookies.defaults({
//   preserve: (cookie) => true, // Adjust this logic if you need more specific cookie preservation
// });


// cypress/support/e2e.ts

// Import Cypress types (if needed for type safety, but it’s usually not necessary here)
/// <reference types="cypress" />

// Register custom commands directly here
Cypress.Commands.add('saveLocalStorage', () => {
  cy.window().then((win) => {
    // Get all keys in local storage
    const items = Object.keys(win.localStorage);
    // Loop through each key and save it
    items.forEach((key) => {
      const value = win.localStorage.getItem(key);
      if (value !== null) {
        win.localStorage.setItem(key, value); // Preserve the value in local storage
      }
    });
  });
});

Cypress.Commands.add('restoreLocalStorage', () => {
  cy.window().then((win) => {
    // Again, get all keys in local storage
    const items = Object.keys(win.localStorage);
    // Loop through each key and restore it
    items.forEach((key) => {
      const value = win.localStorage.getItem(key);
      if (value !== null) {
        win.localStorage.setItem(key, value); // Restore the value in local storage
      }
    });
  });
});

// Preserve all cookies
Cypress.Cookies.defaults({
  preserve: (cookie) => true, // This preserves all cookies between tests
});
