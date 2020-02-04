@PositiveTesting
Feature: Login
    Scenario: Login with valid credentials
        Given user wants to login with following attributes
         | information       | data_type                  |
         | email             | marufr@springrainit.com    |
         | password          | asdzxc                     |  
        When I press Login
        Then I should get status 200 along with a valid token




