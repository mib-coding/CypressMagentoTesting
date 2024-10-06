// cypress/page_objects/loginPage.ts
class LoginPage {
    visit() {
      cy.visit('/customer/account/login/');
    }
  
    fillEmail(email: string) {
      cy.xpath('//input[@id="email"]').clear().type(email);
    }
  
    fillPassword(password: string) {
      cy.xpath('//input[@id="pass"]').clear().type(password);
    }
  
    submit() {
      cy.xpath('//button[@type="submit"]').click();
    }
  }
  
  export default new LoginPage();
  