@PositiveTesting
Feature: User
    Scenario: A User wants to see his Details
        When I call the api with Bearer token
        Then I can see the details of the user with status success
