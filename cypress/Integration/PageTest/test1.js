import LoginPage from "../../support/PageClasses/LoginPage";
import Logout from "../../support/PageClasses/Logout";
import Links from "../../support/PageClasses/Links";
import Search from "../../support/PageClasses/Search";

//PAge Object Model
// Page Object Model is a design pattern that is used to create a model of the web page.
// It is used to represent the web page as an object and to perform actions on the web page.
// It is used to create a model of the web page and to perform actions on the web page.
// Help us to maintain the code in a clean and organized way.
// usability of the code is increased.

describe('Orange_Hrm', () => {

    // I have to create a Object of the Classes

    const Loginobj = new LoginPage();

    const Linkobj = new Links();

    const Logoutobj = new Logout();

    const Searchobj = new Search();

    
    it('test1', () => {
        
        //Enter the URL

        Loginobj.EnterUrl();

        //login credentials

        Loginobj.LogintoApplication();

        // click on Link

        Linkobj.clickOnLink("Admin");

        //logout

        Logoutobj.logouttoApp();

        //forgot password

        Loginobj.forgetPassword();
    });

    it.only('test2', () => {
        
        //Enter the URL

        Loginobj.EnterUrl();

        //login credentials

        Loginobj.LogintoApplication();

        // Search

        Searchobj.search('Buzz');

    });
});