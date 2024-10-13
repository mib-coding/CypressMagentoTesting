export let baseUrl = "https://magento.softwaretestingboard.com/customer/account/login"
import LoginPage from '../page_objects/loginPage';
import ProductPage from '../page_objects/productPage';
import LandingPage from '../page_objects/landingPage';
//import 

// beforeEach(() => {

//   for (let i = 0; i < 10; i++) {
//       console.log ("Before Each" + i);
//     }
//   cy.saveLocalStorage()
  
// })

// afterEach(() => {
//   for (let i = 0; i < 10; i++) {
//       console.log ("After Each" + i);
//     }
//   cy.login()
// })

describe("🧭 ∙ Initial Tests", () => {
 
  it("Visit the Login Url", () => {


      function visitsUrl () {

          experimentalSessionAndOrigin:false // allows Cypress to visit different URL if needed rather than origin
          cy.visit(baseUrl)
      }
  
      visitsUrl() // visits URL
  })

  it('should type eamil and passwords in rquired fields and submit', () => {

    LoginPage.fillEmail('masroor.iqbal.buttar@gmail.com'); // Replace with your test email
    LoginPage.fillPassword('Mib.109209'); // Replace with your test password
    LoginPage.submit();
  })
  
  it('Verify the login is succeful', ()=>{
    LoginPage.loginValidation();
  });

})


//Tests for Product interaction

// describe('Product Interaction', () => {
  
//   it('visits the Product Page', () => {
//     ProductPage.visit();
//   })

//   it('It should add the product to cart', () => {
//   ProductPage.addProductToCart();
//   })

//   it('verify if the true product is added', () => {
//   ProductPage.verifyAddedToCart('You added Product Name to your shopping cart.'); // Replace with the correct message
//   }) 
// })


//Tests for LandingPage Interaction

describe('LandingPage interaction Tests',() => {
  it('Verify the Customer Menu Toggle Button', () =>{
    LandingPage.toggleButton();
    LandingPage.toggleMenu();
    LandingPage.toggleMenuMyAccount()
  })
  it('Click on logo to be on index page', () => {
    LandingPage.logoMain()
  })
  it('Verify if the page is landing page', () => {
    cy.url().should('eq','https://magento.softwaretestingboard.com/')
  })
  it('search bar typing test', () => {
    LandingPage.searchBar();
  })
  it('cart Button test', () => {
    LandingPage.cartButton();
  })
  it('Category Navigation bar verification', () => {
    LandingPage.categoryNavigation();
  })
  it('women category verification', () => {
    LandingPage.womenNavigation();
    LandingPage.womenTopNavigation();
    LandingPage.womenBottomNavigation();
    LandingPage.womenTopSubMenuNavigation();
  })
  it('Verifies Promo Images', () => {
    LandingPage.yogaPreview();
    LandingPage.yogaPreviewButton();
  })

  it('Click on logo to be on index page', () => {
    LandingPage.logoMain();
  })
  it('Verify if the page is landing page', () => {
    cy.url().should('eq','https://magento.softwaretestingboard.com/')
  })
  it('Products Listing Preview Tests', () => {
    LandingPage.productsView();
    LandingPage.productList();
    LandingPage.productImage();
    LandingPage.productDetails();
    LandingPage.productAddToWishlist();
    //LandingPage.productAddToCart();
  })
  it('Click on logo to be on index page', () => {
    LandingPage.logoMain();
  })

  it('Verify if the page is landing page', () => {
    cy.url().should('eq','https://magento.softwaretestingboard.com/')
  })



})
