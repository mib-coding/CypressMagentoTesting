// cypress/page_objects/loginPage.ts
class LoginPage {
    fillEmail(email: string) {
      cy.xpath('//*[@id="email"]').clear().type(email);
    }
  
    fillPassword(password: string) {
      cy.xpath('//*[@id="pass"]').clear().type(password);
    }
  
    submit() {
      cy.xpath('//*[@id="send2"]').click();
    }
    
    loginValidation(){
      cy.url().should('include', '/customer/account')
    }
  }
  
  export default new LoginPage();
  