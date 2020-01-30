Feature: User Login for api
    Scenario: Login with valid credentials
        When I fill in Email with "marufr@springrainit.com"
        And I fill in Password with "asdzxc"
        And I press Login
        Then I should get status 200 and status "success" along with a valid token

    Scenario: Login with invalid credentials
        When I fill in Email with "marufr1@springrainit.com"
        And I fill in Password with "asdzxc1"
        And I press Login
        Then I should get status 401 and status fail
