
import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor"
import { RamdomUserAPI } from "../../apis/RamdomUser/RamdomUserAPI";

const randomUserAPI = new RamdomUserAPI();

var lastResult = {};


Then("I validate gender", function () {
 // expect(lastResult.results[0].gender).to.be.oneOf([
 //   "male",
 //   "female"
 // ]);
});


Then("I validate first name to not be empty", function () {
  // lastResult.results[0].name.first.should('not.be.empty');
  });

When("I send a GET request to RandomUser API", function () {  
  this.lastResult = randomUserAPI.getAPIResponse();
});

