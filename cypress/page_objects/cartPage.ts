//this page locates cart items and cart page
class CartPage {
    //cart locators
    CartItem = {
        listing: () => cy.xpath(''),
        listingButton: () => cy.xpath(''),
        listingMenu: () => cy.xpath(''),
        productMenu: () => cy.xpath(''),
        cartbucket: () => cy.xpath(''),


        }
}
  export default new CartPage();
  