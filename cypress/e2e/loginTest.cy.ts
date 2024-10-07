import LoginPage from '../page_objects/loginPage';
//import "cypress-localstorage-commands";


// describe('visit login page', () => {
//   it('should log in with valid credentials', () => {
//     LoginPage.visit();
//     LoginPage.fillEmail('masroor.iqbal.buttar@gmail.com'); // Replace with your test email
//     LoginPage.fillPassword('Mib.109209'); // Replace with your test password
//     LoginPage.submit();

//     cy.url().should('include', '/customer/account');
//   });
// });

describe('Login Tests', () => {
  beforeEach(() => {
    cy.login(); // Call the custom login command to maintain session
  });
  it('should visit the login page', () => {
    LoginPage.visit();
  })

  it('should type eamil and passwords in rquired fields', () => {

    LoginPage.fillEmail('masroor.iqbal.buttar@gmail.com'); // Replace with your test email
    LoginPage.fillPassword('Mib.109209'); // Replace with your test password
  })
    
  it('should submit the login button and should login', () => {
    //cy.reload()
    LoginPage.submit();
  })
  
  it('to verify the login is succeful', ()=>{
    //cy.reload()
    cy.url().should('include', '/customer/account');
  });
});

