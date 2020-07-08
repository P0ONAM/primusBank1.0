$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Search.feature");
formatter.feature({
  "line": 1,
  "name": "Search Feature",
  "description": "",
  "id": "search-feature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3733042900,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "User is successfully logged in",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "user opens the \"chrome\" browser and exe \"D:\\\\OwnPracticeProjectPrimus\\\\primusBank\\\\src\\\\test\\\\resources\\\\DRIVERS\\\\chromedriver.exe\"",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "user enters the url \"http://primusbank.qedgetech.com/\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user enters \"Admin\" as username",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters \"Admin\" as password",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user click on Login button",
  "keyword": "When "
});
formatter.match({
  "arguments": [
    {
      "val": "chrome",
      "offset": 16
    },
    {
      "val": "D:\\\\OwnPracticeProjectPrimus\\\\primusBank\\\\src\\\\test\\\\resources\\\\DRIVERS\\\\chromedriver.exe",
      "offset": 41
    }
  ],
  "location": "Login.brwserLaunch(String,String)"
});
formatter.result({
  "duration": 24605732400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://primusbank.qedgetech.com/",
      "offset": 21
    }
  ],
  "location": "Login.url(String)"
});
formatter.result({
  "duration": 8386681200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 13
    }
  ],
  "location": "Login.user_enters_as_username(String)"
});
formatter.result({
  "duration": 1189278300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 13
    }
  ],
  "location": "Login.user_enters_as_password(String)"
});
formatter.result({
  "duration": 358908200,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_click_on_Login_button()"
});
formatter.result({
  "duration": 9231937500,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Search Functionality with valid data",
  "description": "",
  "id": "search-feature;search-functionality-with-valid-data",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@EndToEnd"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "user click on branches",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "user select \"INDI\" as country",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "user select \"MAHARASTRA\" as state",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "user select \"MUMBAI\" as city",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "user click on Search button",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "Application shows search result for \"MUMBAI\" city",
  "keyword": "Then "
});
formatter.match({
  "location": "Search.user_click_on_branches()"
});
formatter.result({
  "duration": 1292128900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "INDI",
      "offset": 13
    }
  ],
  "location": "Search.user_select_as_country(String)"
});
formatter.result({
  "duration": 461665000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MAHARASTRA",
      "offset": 13
    }
  ],
  "location": "Search.user_select_as_state(String)"
});
formatter.result({
  "duration": 164459900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MUMBAI",
      "offset": 13
    }
  ],
  "location": "Search.user_select_as_city(String)"
});
formatter.result({
  "duration": 179325800,
  "status": "passed"
});
formatter.match({
  "location": "Search.user_click_on_Search_button()"
});
formatter.result({
  "duration": 1238107300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MUMBAI",
      "offset": 37
    }
  ],
  "location": "Search.application_shows_search_result_for_city(String)"
});
formatter.result({
  "duration": 267997100,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"(//*[text()\u003d\u0027MUMBAI\u0027])[1]\"}\n  (Session info: chrome\u003d83.0.4103.61)\n  (Driver info: chromedriver\u003d72.0.3626.69 (3c16f8a135abc0d4da2dff33804db79b849a7c38),platform\u003dWindows NT 10.0.18363 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027GANESH-PC\u0027, ip: \u0027192.168.43.22\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_181\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 72.0.3626.69 (3c16f8a135abc..., userDataDir: C:\\Users\\ganesh\\AppData\\Loc...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:52977}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 83.0.4103.61, webStorageEnabled: true}\nSession ID: a45eae04c2c0a12c050955c535ff357e\n*** Element info: {Using\u003dxpath, value\u003d(//*[text()\u003d\u0027MUMBAI\u0027])[1]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat bank.methods.SeleniumOperations.validation(SeleniumOperations.java:180)\r\n\tat bank.cucumbermap.Search.application_shows_search_result_for_city(Search.java:71)\r\n\tat ✽.Then Application shows search result for \"MUMBAI\" city(Search.feature:17)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 2219856400,
  "status": "passed"
});
});