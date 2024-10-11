import LoginPage from '../page_objects/loginPage';
import ProductPage from '../page_objects/productPage';
//import "cypress-localstorage-commands";

beforeEach(() => {
  cy.login(); // Call the custom login command to maintain session
});

describe('Login Tests', () => {
  
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
    LoginPage.loginValidation();
  });
});


//Tests for Product interaction

describe('Product Interaction', () => {
  
  it('visits the Product Page', () => {
    ProductPage.visit();
  })

  it('It should add the product to cart', () => {
  ProductPage.addProductToCart();
  })

  it('verify if the true product is added', () => {
  ProductPage.verifyAddedToCart('You added Product Name to your shopping cart.'); // Replace with the correct message
  }) 
})
