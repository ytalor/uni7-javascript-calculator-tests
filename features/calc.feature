Feature: Calculator Thinked

  Scenario: Sum 4 and 5
    Given the numbers 4 and 5
     When sum thoses numbers
     Then the result should be 9!

  Scenario: Subtract 4 and -2
    Given the numbers 4 and -2
     When subtract thoses numbers
     Then the result should be 6!

  Scenario: Multiply 4 and 0
    Given the numbers 4 and 0
     When multiply thoses numbers
     Then the result should be 0!
