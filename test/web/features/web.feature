Feature: User Login Via Webportal
  Scenario: Login user with valid credentials in webportal
    Given I am on the webportal login page
    When I fill in Email and Password with "marufr1@springrainit.com" and "asdzxc"
    Then I should see dashboard page
    | information  | data_type                                    |
    | url          | https://member.dev.clubswan.com/dashboard    |
