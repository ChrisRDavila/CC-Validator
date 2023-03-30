Describe: Validator

Test:"Should validate that element is entered into input"
Code: validator(" ")
Expected Output: True

Test: "should test that no input will not give us results we want"
code: validator()
expected output: false

Test: shoud return false for non-numbers entered in input
code: validator("number")
expected Output: false 