// cypress/page_objects/loginPage.ts
class LoginPage {
    visit() {
      cy.visit('/customer/account/login');
    }
  
    fillEmail(email: string) {
      cy.xpath('//*[@id="email"]').clear().type(email);
    }
  
    fillPassword(password: string) {
      cy.xpath('//*[@id="pass"]').clear().type(password);
    }
  
    submit() {
      cy.xpath('//*[@id="send2"]').click();
    }
  }
  
  export default new LoginPage();
  