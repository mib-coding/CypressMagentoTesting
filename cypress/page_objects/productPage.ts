// cypress/page_objects/productPage.ts
class ProductPage {
    visit() {
      cy.visit('/');
    }
  
    addProductToCart() {
      cy.xpath('//a[contains(text(),"T-Shirt")]').click(); // Adjust this XPath as needed
      cy.xpath('//button[@data-action="add-to-cart"]').click(); // Adjust this selector accordingly
    }
  
    verifyAddedToCart(message: string) {
      cy.xpath('//div[contains(@class,"message-success")]').should('contain', message);
    }
  }
  
  export default new ProductPage();
  