Feature: Home Page

Background: 
Given I am in the Home Page

@smoke @ui
Scenario: Navigate to Sign up Validation
    Then Deel logo should be visible
    
    When I click on Sign up link
    Then the Sign up page is displayed