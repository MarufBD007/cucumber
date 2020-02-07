# language: en
@PositiveTesting    
Feature: User Login Via Web

    @AUTOMATED @CUC-1 
    Scenario: Login with valid credentials for web
        
        Given I am on the webportal login page
        When I fill in Email and Password with the following and then press Login
          | information | data_type               |
          | email       | marufr@springrainit.com |
          | password    | asdzxc                  |
        Then I should see dashboard page
          | information | data_type                                 |
          | url         | https://member.dev.clubswan.com/dashboard |

