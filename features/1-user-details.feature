# language: en
@PositiveTesting    
Feature: User Details

    @AUTOMATED @CUC-2 
    Scenario: A User wants to see his Details
        
        When I call the api with Bearer token
        Then I can see the details of the user with status success

