Feature: User
  Scenario: Display all users list
    Given I fetch all user
    When I make an api call using callbacks
    Then I end up with users 10