Feature: login

Scenario Outline: validate login for multiple users
Given open the browser and enter the url
When enter username as <username>
And enter password as <password>
And click on submit
Then login should be successful

# test data should be given in the below format
Examples:
    | username  | password      |
    | Admin     | Admin123      |
    | admin     | Admin123      |
    | ADMIN     | ADMIN123      |
    | ADmin     | ADMIN         |
    | Admin     | admin123      |
    