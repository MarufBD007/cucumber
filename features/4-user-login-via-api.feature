# language: en
@PositiveTesting    
Feature: User Login Via API

    @AUTOMATED @CUC-1 
    Scenario: Login with valid credentials
        
        Given I want to login with the following attributes
          | information | data_type               |
          | email       | marufr@springrainit.com |
          | password    | asdzxc                  |
        When I press Login button
        Then I should get status 200 along with a valid token

