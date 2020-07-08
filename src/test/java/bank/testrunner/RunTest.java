package bank.testrunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions
      (
		  plugin= {"pretty", "html:target/cucumber"},
		  features="src/test/resources/BUSINESS_LOGIC/CUCUMBER_SUITES",
		  tags="@EndToEnd",
		  glue="bank.cucumbermap",
		  monochrome=false   	
		
		)


public class RunTest
{
	
	
}
