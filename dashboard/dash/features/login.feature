Feature: Logging into the application
  Scenario: Bad login
    Given that a user account exists
    When the user inputs the incorrect login information
    Then the user sees an error

  Scenario: Logging in a user
    Given that a user account exists
    When the user inputs the correct login information
    Then the user is logged in