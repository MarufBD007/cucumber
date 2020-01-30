Feature: User Login
    Scenario: Login with valid Scenario
        Given I am on the login page
        When I fill in Email with "marufr@springrainit.com"
        And I fill in Password with "asdzxc"
        And I press Login
        Then I should get status 200 and success status along with a valid token
