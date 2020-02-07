# language: en
@PositiveTesting    
Feature: Accounts

    @AUTOMATED @CUC-1 
    Scenario: I want to see the account list
        
        When I call the api with Bearer token for fetching account list
        Then I should see the list of accounts

