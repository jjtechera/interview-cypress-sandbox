export class HomePage {

    elements = {
        header: () => cy.get('h1'),
        signUpLink: () => cy.get('[data-qa="sign-up"]'),
        logo: () => cy.get('[data-qa="logo"]'),
    }

    verifyHeader(){
        return this.elements.header().should('contain.text','Sweet perks and even sweeter discounts');
    }

    clickSignUp(){
        return this.elements.signUpLink().click();
    }
    verifyLogoToBeVisible(){
        return this.elements.logo().should('be.visible');
    }
}