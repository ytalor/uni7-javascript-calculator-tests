Feature: Calculator Thinked

  Scenario: Sum 0.3 and 0.2
    Given the numbers 0.3 and 0.2
     When sum thoses numbers
     Then the result should be 0.5!

  Scenario: sum 3.5 and 2.5
    Given the numbers 3.5 and 2.5
     When sum thoses numbers
     Then the result should be 6.0!

  Scenario: sum 0.2 and 0.04
    Given the numbers 0.2 and 0.04
     When sum thoses numbers
     Then the result should be 0.24!
