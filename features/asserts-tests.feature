@SimpleAssertions
Feature: Simple assertions

  @NodeAssertion
  Scenario: Validate that 2 + 2 equals 4
    Given I perform a basic addition
    Then the result should be 4

  @ChaiAssertion
  Scenario: Validate that 2 + 2 equals 4
    Given I perform a basic addition
    Then the result should be 4 with chai assertion

