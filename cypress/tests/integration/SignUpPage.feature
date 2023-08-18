Feature: SignUp Page

Background: 
Given I am in the Sign Up Page

@smoke @ui
Scenario: Navigate to Sign up Validation
    Then Deel logo should be visible
    
    When I click on I'm a <options> button 
    Then the sub header is updated for "<options>"

    Examples:
    | options |
    | Business |
    | Contractor |
    | Employee |
    