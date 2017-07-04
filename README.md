Setup notes for running the automatic test scripts

The following exmaple use ``AutoTest_WiseSearch6``and you can replace it with other products.

## Component
  * NodeJS 4.4.7
  * WebdriverIO (Selenium Web Driver and Runner)
  * Selenium 2.53.X
  * PhantomJS 2.1.X
  * BrowserProxy 2.1.X
     * https://bmp.lightbody.net/
  * Command Prompt for Windows (cmd)

## Setup Host
### Install NodeJS and GIT
* Go to https://nodejs.org/en/ to install nodejs
* Go to https://git-scm.com/ to install git

### Install PhantomJS, Microsoft WebDriver

```
#### Windows
1. Go to http://phantomjs.org/ to download the software
1. Add the ``bin`` directory to system path for selenium to locate (My Computer->Properties->Advance system settings->Environment Variables->Path)
1. Go to https://developer.microsoft.com/en-us/microsoft-edge/tools/webdriver/ to download and install the software. Make sure the build number matches your windows build number or it won't work.
1. Add ``C:\Program Files (x86)\Microsoft Web Driver\`` to system path

### Prepare Environment
Both Selenium and BMP are placed at WiseQAUtils as submodule. It contains the start and stop command for both services

```bash
# <git checkout the source>
# cd AutoTest_WiseSearch6
# git submodule init && git submodule update
# npm run init_utils
```
### Run Supporting process - Selenium

```
#### Windows
Need to run the selenium in seperated command prompt (cmd). Use Ctrl-C to quit
```
# cd WiseQAUtils/
# npm run win_run_sel
```

### Run Test
```bash
# npm run test
# npm run test_firefox (Need older version of firefox)
# npm run test_chrome
# npm run test_edge
```

### BrowserMobProxy
We use BrowserMobProxy to do DNS overriding and direct traffic to UAT servers. Also the test script need to add a URL remapping logic to use the port number of the UAT servers. See ``AutoTest_WiseSearch6/spec/ws6_basic_spec.js``

1. Make sure hostname needed to be overrided in ``AutoTest_WiseSearch6/conf/host_to_remap.js``
1. Make sure the port remapping code run at the begining of your test scripts.

```
#### Windows
Need to run the bmp in seperated command prompt (cmd). Use Ctrl-C to quit
```
# cd WiseQAUtils/
# npm run win_run_bmp
```

Then you can run

```
#### Windows
```
# set WISERS_UAT_HOST=<host:port>
# npm run test_with_bmp
# npm run test_firefox_with_bmp
# npm run test_chrome_with_bmp
# npm run test_edge_with_bmp
# set WISERS_UAT_HOST=
```

### CleanUp - Linux Only
```bash
# cd WiseQAUtils/
# npm run stop_sel
# npm run stop_bmp
```

## Know Issues and TODO
* Refactor config file locations as now need to duplicate to each product
* npm forever won't work in Windows
* Latest Firefox-4.7 won't work (Security handling for latest firefox)

## Reference
   * https://developer.microsoft.com/en-us/microsoft-edge/tools/webdriver/
   * https://github.com/SeleniumHQ/selenium/wiki/InternetExplorerDriver#required-configuration
   * http://stackoverflow.com/questions/37693106/selenium-2-53-not-working-on-firefox-47
