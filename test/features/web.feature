Feature: User Login Via Webportal
  Scenario: Login user with valid credentials in webportal
    Given I am on the webportal login page
    When I fill in Email and Password with "marufr@springrainit.com" and "asdzxc"
    Then I should see dashboard page
