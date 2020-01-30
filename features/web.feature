Feature: User Login for webportal
  Scenario: Login user with valid credentials in webportal
    Given I am on the login page
    When I fill in Email with "marufr@springrainit.com"
    And I fill in Password with "asdzxc"
    And I press Login
    Then I should see the dashboard
