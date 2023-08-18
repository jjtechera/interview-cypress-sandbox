// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('navigate', (url) => {
  cy.visit(Cypress.env('baseUrl') + url,{failOnStatusCode: false});
});

Cypress.Commands.add('navigateToHomePage', () => {  
  cy.visit(Cypress.env('baseUrl'), {timeout: 10000}, {
  }).then(() => {
      cy.get('body').then(($body) => {
        if ($body.find('404-page-selector').length === 0) {
          // 404 page not found
          expect(true).to.be.true;
        } else {
          // 404 page found
          expect(false).to.be.true;
        }  
      })
  })
});
