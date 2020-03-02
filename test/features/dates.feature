Feature: Date comparison

    Scenario: Before the target date
        Given the date 2019-12-09
        When I compare with target date
        Then the result should be 'OK'

    Scenario: After the target date
        Given the date 2019-12-12
        When I compare with target date
        Then the result should be 'ABORT'