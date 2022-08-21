$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:Alert.feature");
formatter.feature({
  "name": "Alert scenario",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Alert"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.scenario({
  "name": "Validation of Alert Ok button",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Alert"
    },
    {
      "name": "@Regression"
    },
    {
      "name": "@alert"
    }
  ]
});
formatter.before({
  "status": "skipped"
});
formatter.before({
  "status": "skipped"
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "User click the alertbox button",
  "keyword": "When "
});
formatter.match({
  "location": "Alerttt.user_click_the_alertbox_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User switches to alert and click ok",
  "keyword": "And "
});
formatter.match({
  "location": "Alerttt.user_switches_to_alert_and_click_ok()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
formatter.uri("file:RegisterWithMultipleData.feature");
formatter.feature({
  "name": "Registration with Multiple data",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@RegisterMultipleData"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Validation of Registration form with multiple data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "User click the firstname and enter the value \"\u003cFirstName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User click lastname and enter \"\u003cLastName\u003e\" in lastname field",
  "keyword": "And "
});
formatter.step({
  "name": "User click Address field and enterthe address \"\u003cAddress\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User click email and enter \"\u003cEmail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User click phonenumber and enter the value \"\u003cPhoneNum\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User validate the page title is \"Register\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "FirstName",
        "LastName",
        "Address",
        "Email",
        "PhoneNum"
      ]
    },
    {
      "cells": [
        "TestFirstName",
        "TestLastname",
        "TestAddress",
        "abc@gmail.com",
        "124555"
      ]
    },
    {
      "cells": [
        "Kokila",
        "testLastname",
        "Perungudi",
        "xyz@gmail.com",
        "8899"
      ]
    },
    {
      "cells": [
        "aaa",
        "testt",
        "saidapet",
        "yyy@gmail.com",
        "7679"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Validation of Registration form with multiple data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@RegisterMultipleData"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "skipped"
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "User click the firstname and enter the value \"TestFirstName\"",
  "keyword": "When "
});
formatter.match({
  "location": "Registrationn.user_click_the_firstname_and_enter_the_value(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User click lastname and enter \"TestLastname\" in lastname field",
  "keyword": "And "
});
formatter.match({
  "location": "Registrationn.user_click_lastname_and_enter_in_lastname_field(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User click Address field and enterthe address \"TestAddress\"",
  "keyword": "And "
});
formatter.match({
  "location": "Registrationn.user_click_Address_field_and_enterthe_address(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User click email and enter \"abc@gmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "Registrationn.user_click_email_and_enter(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User click phonenumber and enter the value \"124555\"",
  "keyword": "And "
});
formatter.match({
  "location": "Registrationn.user_click_phonenumber_and_enter_the_value(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User validate the page title is \"Register\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Registrationn.user_validate_the_page_title_is(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
formatter.scenario({
  "name": "Validation of Registration form with multiple data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@RegisterMultipleData"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "skipped"
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "User click the firstname and enter the value \"Kokila\"",
  "keyword": "When "
});
formatter.match({
  "location": "Registrationn.user_click_the_firstname_and_enter_the_value(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User click lastname and enter \"testLastname\" in lastname field",
  "keyword": "And "
});
formatter.match({
  "location": "Registrationn.user_click_lastname_and_enter_in_lastname_field(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User click Address field and enterthe address \"Perungudi\"",
  "keyword": "And "
});
formatter.match({
  "location": "Registrationn.user_click_Address_field_and_enterthe_address(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User click email and enter \"xyz@gmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "Registrationn.user_click_email_and_enter(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User click phonenumber and enter the value \"8899\"",
  "keyword": "And "
});
formatter.match({
  "location": "Registrationn.user_click_phonenumber_and_enter_the_value(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User validate the page title is \"Register\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Registrationn.user_validate_the_page_title_is(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
formatter.scenario({
  "name": "Validation of Registration form with multiple data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@RegisterMultipleData"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "skipped"
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "User click the firstname and enter the value \"aaa\"",
  "keyword": "When "
});
formatter.match({
  "location": "Registrationn.user_click_the_firstname_and_enter_the_value(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User click lastname and enter \"testt\" in lastname field",
  "keyword": "And "
});
formatter.match({
  "location": "Registrationn.user_click_lastname_and_enter_in_lastname_field(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User click Address field and enterthe address \"saidapet\"",
  "keyword": "And "
});
formatter.match({
  "location": "Registrationn.user_click_Address_field_and_enterthe_address(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User click email and enter \"yyy@gmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "Registrationn.user_click_email_and_enter(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User click phonenumber and enter the value \"7679\"",
  "keyword": "And "
});
formatter.match({
  "location": "Registrationn.user_click_phonenumber_and_enter_the_value(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User validate the page title is \"Register\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Registrationn.user_validate_the_page_title_is(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
formatter.uri("file:Registrationnn.feature");
formatter.feature({
  "name": "Registration Page",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Register"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "skipped"
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "User validate the page title is \"Register\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Registrationn.user_validate_the_page_title_is(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Validation of text fields",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Register"
    },
    {
      "name": "@Test"
    }
  ]
});
formatter.step({
  "name": "User click the firstname and enter the value \"TestFirstName\"",
  "keyword": "When "
});
formatter.match({
  "location": "Registrationn.user_click_the_firstname_and_enter_the_value(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User click lastname and enter \"TestLastname\" in lastname field",
  "keyword": "And "
});
formatter.match({
  "location": "Registrationn.user_click_lastname_and_enter_in_lastname_field(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User click Address field and enterthe address \"TestAddress\"",
  "keyword": "And "
});
formatter.match({
  "location": "Registrationn.user_click_Address_field_and_enterthe_address(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User click email and enter \"abc@gmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "Registrationn.user_click_email_and_enter(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User click phonenumber and enter the value \"124555\"",
  "keyword": "And "
});
formatter.match({
  "location": "Registrationn.user_click_phonenumber_and_enter_the_value(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "skipped"
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "User validate the page title is \"Register\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Registrationn.user_validate_the_page_title_is(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Validate RadioButton",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Register"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "User clicks the Female radio button",
  "keyword": "When "
});
formatter.match({
  "location": "Registraions.user_clicks_the_Female_radio_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User validates radio button is selected",
  "keyword": "Then "
});
formatter.match({
  "location": "Registraions.user_validates_radio_button_is_selected()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user validates the new validation",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
});