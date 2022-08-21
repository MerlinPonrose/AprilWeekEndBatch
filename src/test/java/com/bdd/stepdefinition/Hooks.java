package com.bdd.stepdefinition;

import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks extends TestExecutor{
	
//globally	
	@Before(order=1)
	public void precondition1()
	{
		System.out.println("Precondition 1");
	System.setProperty("webdriver.chrome.driver", "C:\\Users\\Karen Amy\\eclipse-workspace\\AprilWeekEndSelenium\\exe\\chromedriver.exe");
		
		driver = new ChromeDriver();
		
		driver.manage().window().maximize();
		
		driver.get("https://demo.automationtesting.in/Register.html"); // to open URL
		
	}

	@Before(order=2)
	public void precondition2()
	{
		System.out.println("Precondition 2");
	}
	
	@After(order=1)
	public void postcondition1()
	{
		System.out.println("post condition 1");
		driver.quit();
	}
	
	@After(order=2)
	public void postcondition2()
	{
		System.out.println("post condition 2");
	}
	
	@Before("@alert")
	public void alertPrecondition()
	{
		System.out.println("Precondition for alert");
	}
	
	@After("@Test")
	public void testpostcondition()
	{
		System.out.println("test post condition");
	}
}
