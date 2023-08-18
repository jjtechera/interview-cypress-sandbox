import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor"
import { HomePage } from "../../pages/HomePage/HomePage";
const homePage = new HomePage();


Given("I am in the Home Page", function () {  
  cy.navigateToHomePage();
});

Then("Deel logo should be visible", function () {
  homePage.verifyLogoToBeVisible();
});

When("I click on Sign up link", function () {  
  homePage.clickSignUp();
});


