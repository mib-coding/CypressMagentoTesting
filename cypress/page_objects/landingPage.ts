// cypress/page_objects/landingPage.ts
class LandingPage {
  
    //locators
    customerMenuToggle = {
    logoMain: () => cy.xpath('/html/body/div[2]/header/div[2]/a'),
    toggleButton: () => cy.xpath('/html/body/div[2]/header/div[1]/div/ul/li[2]/span/button'),
    toggleMenu: () => cy.xpath('/html/body/div[2]/header/div[1]/div/ul/li[2]/div'),
    }

    searchCartSection = {
        searchBAr: () => cy.xpath('//*[@id="search"]'),
        cartButton: () => cy.xpath('/html/body/div[2]/header/div[2]/div[1]/a'),
    }

    navigationBar = {
        categoryNavigation: () => cy.xpath('//*[@id="ui-id-2"]'),
        whatsnewNavigation: () => cy.xpath('//*[@id="ui-id-3"]'),
        womenNavigation: () => cy.xpath('//*[@id="ui-id-4"]'),
        womenTopNavigation: () => cy.xpath('//*[@id="ui-id-2"]/li[2]/ul/li[1]'),
        womenBottomNavigation: () => cy.xpath('//*[@id="ui-id-2"]/li[2]/ul/li[2]'),
        womenTopSubMenuNavigation: () => cy.xpath('//*[@id="ui-id-11"]')
    }

    imagePromoPreview ={
        yogaPreview: () => cy.xpath('//*[@id="maincontent"]/div[3]/div/div[2]/div[1]/a'),
        yogaPreviewButton: () => cy.xpath('//*[@id="maincontent"]/div[3]/div/div[2]/div[1]/a/span/span[2]'),
    }

    productsOnLandingPagePreview = {
        productsView: () => cy.xpath('//*[@id="maincontent"]/div[3]/div/div[2]/div[4]/div/div'),
        productList: () => cy.xpath('//*[@id="maincontent"]/div[3]/div/div[2]/div[4]/div/div/ol/li[1]/div'),
        productImage: () => cy.xpath('//*[@id="maincontent"]/div[3]/div/div[2]/div[4]/div/div/ol/li[1]/div/a/span/span/img'),
        productDetails: () => cy.xpath('//*[@id="maincontent"]/div[3]/div/div[2]/div[4]/div/div/ol/li[1]/div/div'),
        productAddToWishlist: () => cy.xpath('//*[@id="maincontent"]/div[3]/div/div[2]/div[4]/div/div/ol/li[1]/div/div/div[4]/div/div[2]/a[1]'),
        productAddToCart: () => cy.xpath('//*[@id="maincontent"]/div[3]/div/div[2]/div[4]/div/div/ol/li[1]/div/div/div[4]/div/div[1]/form/button')

    }
//Logics on locators
    toggleButton(){
        this.customerMenuToggle.toggleButton().click();
    }

    toggleMenu(){
        this.customerMenuToggle.toggleMenu().scrollIntoView().contains('My Account')
        this.customerMenuToggle.toggleMenu().scrollIntoView().contains('My Wish List')
        this.customerMenuToggle.toggleMenu().scrollIntoView().contains('Sign Out ')
    }

    toggleMenuMyAccount(){
        this.customerMenuToggle.toggleMenu().contains('My Account').click().url()
        .should('eq','https://magento.softwaretestingboard.com/customer/account/')
    }

    logoMain(){
        this.customerMenuToggle.logoMain().click()
    }

    searchBar(){
        this.searchCartSection.searchBAr().type('product')
    }

    cartButton(){
        this.searchCartSection.cartButton().click()
    }

    categoryNavigation(){
        this.navigationBar.categoryNavigation().scrollIntoView()
    }

    whatsnewNavigation(){
        this.navigationBar.whatsnewNavigation().click()
    }

    womenNavigation(){
        this.navigationBar.womenNavigation().scrollIntoView().contains('Women')
    }

    womenTopNavigation(){
        this.navigationBar.womenTopNavigation().scrollIntoView().contains('Top')
    }

    womenBottomNavigation(){
        this.navigationBar.womenBottomNavigation().scrollIntoView().contains('Bottoms')
    }

    womenTopSubMenuNavigation(){
        this.navigationBar.womenTopSubMenuNavigation().scrollIntoView().contains('Jakets')
    }

    yogaPreview(){
        this.imagePromoPreview.yogaPreview().scrollIntoView()
    }

    yogaPreviewButton(){
        this.imagePromoPreview.yogaPreviewButton().click()
    }

    productsView(){
        this.productsOnLandingPagePreview.productsView().scrollIntoView()
    }
    productList(){
        this.productsOnLandingPagePreview.productList().scrollIntoView()
    }
    productImage(){
        this.productsOnLandingPagePreview.productImage().scrollIntoView()
    }
    productDetails(){
        this.productsOnLandingPagePreview.productDetails().contains('Rating')
    }
    productAddToWishlist(){
        this.productsOnLandingPagePreview.productAddToWishlist().click()
    }
    productAddToCart(){
        this.productsOnLandingPagePreview.productAddToCart().click()
    }


  }
  
  export default new LandingPage();