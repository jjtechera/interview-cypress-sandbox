Feature: Main API

@smoke @api
Scenario: RandomUser API
    When I send a GET request to RandomUser API
    Then I validate gender
    Then I validate first name to not be empty