Feature: Simple form
Scenario: to verify that the form is working for all mandatory fields
Given open browser enter Simple Form url
When enter first name
And enter last name
And enter email
And enter contact number
And enter message
And click on submit button
Then successfully alert should be display with name and last name and message of thank you

