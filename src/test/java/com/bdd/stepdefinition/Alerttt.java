package com.bdd.stepdefinition;

import cucumber.api.java.en.When;

public class Alerttt extends TestExecutor{
	
	
	
	@When("User click the alertbox button")
	public void user_click_the_alertbox_button() {
	   alert.clickAlertBox();
	}

	@When("User switches to alert and click ok")
	public void user_switches_to_alert_and_click_ok() {
		
		alert.ClickalertOkButton();
	   
	}


}
