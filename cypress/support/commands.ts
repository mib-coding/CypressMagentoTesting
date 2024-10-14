// // cypress/support/commands.ts

// // Implementing custom commands to handle local storage
// Cypress.Commands.add('saveLocalStorage', () => {
//     cy.window().then((win) => {
//       const items = Object.keys(win.localStorage);
//       items.forEach((key) => {
//         const value = win.localStorage.getItem(key);
//         if (value) {
//           win.localStorage.setItem(key, value); // Keep the value in local storage
//         }
//       });
//     });
//   });
  
//   Cypress.Commands.add('restoreLocalStorage', () => {
//     cy.window().then((win) => {
//       const items = Object.keys(win.localStorage);
//       items.forEach((key) => {
//         const value = win.localStorage.getItem(key);
//         if (value) {
//           win.localStorage.setItem(key, value); // Restore the value in local storage
//         }
//       });
//     });
//   });
  