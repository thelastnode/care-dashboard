Feature: Logout
  Scenario: Logging out
    Given that a user is logged in
    When the user clicks the log out button
    Then the user sees the login page
