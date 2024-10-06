import ProductPage from '../page_objects/productPage';

describe('Product Interaction', () => {
  it('should add a product to the cart', () => {
    ProductPage.visit();
    ProductPage.addProductToCart();
    ProductPage.verifyAddedToCart('You added Product Name to your shopping cart.'); // Replace with the correct message
  });
});
