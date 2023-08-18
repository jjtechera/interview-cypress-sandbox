export class SignUpPage {

    elements = {
        header: () => cy.get('h1'),
        subHeader: () => cy.get('h2'),
        nextButton: () => cy.get('button.MuiButton-contained'),
        logo: () => cy.get('[data-qa="logo"]'),
        businessButton: () => cy.get('[data-qa="client"]'),
        contractorButton: () => cy.get('[data-qa="contractor"]'),
        employeeButton: () => cy.get('[data-qa="employee"]'),
    }

    verifyHeader(){
        return this.elements.header().should('contain.text','How will you use Deel?');
    }

    verifySubHeader(option){
        switch(option){
            case "Business":
                return this.elements.subHeader().should('contain.text','Hire internationally with complete confidence');
            case "Contractor":
                return this.elements.subHeader().should('contain.text','Work anywhere and get paid in any currency');
            case "Employee":
                return this.elements.subHeader().should('contain.text','An out of this world working experience');
            default:
                return expect(false).to.be.true;
        }
    }

    clickNext(){
        return this.elements.nextButton().click();
    }
    clickBusiness(){
        return this.elements.businessButton().click();
    }
    clickContractor(){
        return this.elements.contractorButton().click();
    }
    clickEmployee(){
        return this.elements.employeeButton().click();
    }
    verifyLogoToBeVisible(){
        return this.elements.logo().should('be.visible');
    }
}