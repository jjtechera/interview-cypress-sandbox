import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor"
import { SignUpPage } from "../../pages/SignUpPage/SignUpPage";

const signUpPage = new SignUpPage();


Given("I am in the Sign Up Page", function () {  
  cy.navigate("SignUp");
});

Then("the Sign up page is displayed", function () {
  signUpPage.verifyLogoToBeVisible();
  signUpPage.verifyHeader();
});

When("I click on Next button", function () {  
  signUpPage.clickNext();
});

When("I click on I'm a Business button", function () {  
  signUpPage.clickBusiness();
});
When("I click on I'm a Contractor button", function () {  
  signUpPage.clickContractor();
});
When("I click on I'm a Employee button", function () {  
  signUpPage.clickEmployee();
});

Then("the sub header is updated for {string}", function (string) {
  signUpPage.verifySubHeader(string);
});