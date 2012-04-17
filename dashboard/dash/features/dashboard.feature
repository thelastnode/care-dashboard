Feature: Dashboards
  Scenario: Add a dashboard
    Given that a user is logged in
    When the user clicks the add dashboard button
    Then enters "foo" as the name for a dashboard
    Then the user sees a dashboard tab labeled "foo"