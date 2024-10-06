import LoginPage from '../page_objects/loginPage';

describe('User Login', () => {
  it('should log in with valid credentials', () => {
    LoginPage.visit();
    LoginPage.fillEmail('your_email@example.com'); // Replace with your test email
    LoginPage.fillPassword('your_password'); // Replace with your test password
    LoginPage.submit();

    cy.url().should('include', '/customer/account');
  });
});
