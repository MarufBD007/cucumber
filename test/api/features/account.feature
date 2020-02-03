@PositiveTesting
Feature: Accounts
    Scenario: I want to see the account list
        When I call the api with Bearer token for fetching account list
        Then I can see the list of accounts
