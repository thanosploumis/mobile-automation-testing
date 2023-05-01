
# API DEMO DEBUG
# Appium + WebDriver.IO - Android & IOS Example

In this project is demonstrated how a QA Mobile Automation Testing can be performed using Appium + WebDriver.IO
More commands and insights about the integration at [WebDriverIO Appium docs](https://webdriver.io/docs/api/appium/)

- - - 
## General System Requirements

#### Node JS

We need node js to download Appium beta version & drivers easily.
* Download[ Node Js](https://linktodocumentation) depending on your operating system.
#### Java JDK & JAVA_HOME variable

* [Open JDK](https://openjdk.org)
* [JAVA_HOME setup for Windows](https://confluence.atlassian.com/doc/setting-the-java_home-variable-in-windows-8895.html)
* [JAVA_HOME setup for Mac](https://mkyong.com/java/how-to-set-java_home-environment-variable-on-mac-os-x/)

I Tested the following steps on MAC OS Big Sur:

* Installed Adopted [Open JDK with Homebrew](https://formulae.brew.sh/cask/adoptopenjdk)
* To return where was the SDK installed I used the command:
```bash
    /usr/libexec/java_home
```
* If you want to check the java version:
```bash
    /usr/libexec/java_home -V
```
* Open the zshenv file to insert the JAVA_HOME variable (i):
```bash
    vim ~/.bash_profile
```
* Enter the environment variable and save the vim session (:wq!):
```bash
    export JAVA_HOME=$(/usr/libexec/java_home)
```
* Source and apply the changes in the system:
```bash
    source ~/.bash_profile
```
* You can check if it was set correctly running the command:
```bash
    echo $JAVA_HOME
```
* It should return something like: 
```bash
    /Library/Java/JavaVirtualMachines/adoptopenjdk-16.jdk/Contents/Home
```

## Android Setup
#### Android Studio & ANDROID_HOME variable

* [Android Studio](https://developer.android.com/studio?hl=es-419&gclsrc=aw.ds&gclid=Cj0KCQjwyOuYBhCGARIsAIdGQRNrDv20QvoOy_-I5E1LoZdOLu3nvhlwX_7EjPeHcE1kGQNNcIVOme0aAqckEALw_wcB)
* [ANDROID_HOME setup for Windows](https://www.testingdocs.com/setting-android_home-environment-variable-on-windows/)
* [ANDROID_HOME setup for Mac](https://stackoverflow.com/questions/19986214/setting-android-home-enviromental-variable-on-mac-os-x)

Tested the following steps on MAC OS Big Sur:
* Android studio on Mac can be located at:
```bash
    * cd /Users/[USER]/Library/Android/sdk
```
* We need to add a reference to a couple of folders inside of that SDK
   * Tools & Platform Tools
* Open the bash_profile (or bashrc) file to insert the ANDROID_HOME variable (i):
```bash
    vim ~/.bash_profile
```
* Enter the environment variables and save the vim session (:wq!):
```bash
    export ANDROID_HOME="/Users/[USER]/Library/Android/sdk"
    export PATH=$ANDROID_HOME/platform-tools:$PATH
    export PATH=$ANDROID_HOME/tools:$PATH
```
* Source and apply the changes in the system:
```bash
    source ~/.bash_profile
```
* You can check if it was set correctly running the command:
```bash
    echo $ANDROID_HOME
```
* It should return something like: 
```bash
    /Users/[USER]/Library/Android/sdk
```
* With this configured you can access the command [Android Debug Bridge](https://developer.android.com/studio/command-line/adb)
```bash
    adb
```
- - -

## IOS Setup

1. Install XCode from the MacOs App Store
2. Install [XCode Command line tools](https://www.freecodecamp.org/news/install-xcode-command-line-tools/)
```bash
    xcode-select --install
```
- Make sure it is installed correctly using the following command:
```bash
    xcode-select -p
```
- It should return something like(may defer from your OS version):
```bash
    /Applications/Xcode.app/Contents/Developer
```
3. Install Carthage(It is a simple dependency manager for macOS and iOS, created by a group of developers from GitHub).
```bash
    brew install carthage
```

---

#### Download Appium Inspector
In order to find the correct locators to map elements, you will need to have this tool installed in your computer.

* [Appium Inspector Releases](https://github.com/appium/appium/blob/1.x/docs/en/writing-running-appium/web/chromedriver.md)

For this project you can use the following configuration:

| Server Key | Server Value |
| ------------- | ------------- |
| Remote Host | 0.0.0.0 |
| Remote Port | 4724 |
| Remote Path | / |

Android Desired Capabilities(Example)
| Desired Capability Key  | Desired Capability Value |
| ------------- | ------------- |
| platformName  | Android |
| appium:platformVersion  | [OS VERSION / IMAGE]  |
| appium:deviceName | [EMULATED_DEVICE_NAME] |
| appium:app | /[PROJECT_PATH]/[APP_NAME].apk |
| appium:automationName | UIAutomator2 |

IOS Desired Capabilities(Emulator - App)
| Desired Capability Key  | Desired Capability Value |
| ------------- | ------------- |
| platformName  | IOS |
| appium:platformVersion  | [OS VERSION / IMAGE]  |
| appium:deviceName | [EMULATED_DEVICE_NAME] |
| appium:app | /[PROJECT_PATH]/[APP_NAME].app |
| appium:automationName | XCUItest |

#### Install Apium 
Appium is an open source test automation framework for use with native, hybrid and mobile web apps. 
It drives iOS, Android, and Windows apps using the WebDriver protocol.

* Install [Appium](https://appium.io) from the official documentation 
* Install [Appium 2](https://appiumpro.com/editions/122-installing-appium-20-and-the-driver-and-plugins-cli) by Node JS(Beta):
```bash
    npm install -g appium@next
```
Check the appium version using
```bash
    appium -v
```

#### Appium Doctor
To check if your OS meets the appium requirements, install this node package.
* [Appium Doctor Package](https://github.com/appium/appium-doctor)
Install it using the command 
```bash 
npm install appium-doctor -g
```
And then use the library:
```bash
appium-doctor
```

#### Appium drivers
If you want Appium to work correctly, you need to download and have the android/ios driver in your system.
Run the commands:
```bash 
appium driver install xcuitest
appium driver install uiautomator2
```
Check the installed drivers using
```bash 
appium driver list
```

***Important Note:***
For IOS you may not need the .apk file as it's supposed to run on Android. However, you need an .app file or a .ipa file to run on real IOS device

## Setup WebDriverIO

1- Run the command to create the package.json & continue with the installation process
```bash
    npm init wdio .
```
2- Using the WDIO Configuration Helper select the options you want to select. In my case I decided to use:  
* On my local machine
* Mocha
* No compiler
* Spect Location: Default
* Do you want WebDriverIO to generate some test files?: No
* Reporter: Spec
* No Plugin 
* Service: Appium
* Base URL: Default
* NPM Install: Yes

3- Add your tests at 
```bash
'./[yourProject]/specs/**/*.js'
```

4- Configure the app route at wdio.conf.js
* Declare where it is going to be located
```bash
const projectPath = require('path')
const androidAppPath = projectPath.join(process.cwd(), "app/android/ApiDemos-debug.apk")
const iosAppPath = projectPath.join(process.cwd(),"app/ios/some-ipa-or-app-file");
```

* Set up the capabilities for Android(Emulator sample)
```bash
capabilities: [{
        platformName: 'Android', 
        "appium:device-name": 'Pixel 2 API 25',
        "appium:platformVersion": "7.1.1",
        "appium:automationName": "UIAutomator2",
        "appium:app": androidAppPath
    }]
```
* Set up the capabilities for Android(Emulator sample)
```bash
capabilities: [{
        platformName: 'IOS',
        "appium:device-name": 'iPhone 8',
        "appium:platformVersion": "15.2",
        "appium:automationName": "XCUItest",
        "appium:app": iosAppPath,   
    }]
```

* Install Appium in your project
```bash
    npm install --save-dev appium@next
```

* Check if the drivers are still available, if not install them again:
```bash 
appium driver list
```
```bash 
appium driver install xcuitest
appium driver install uiautomator2
```

* Run your scripts using
```bash
npx wdio
```

## Setup and run WebDriverIO
if you want to run this project:

1- Install all the system requirements

2- Clone the project

3- Run: npm i

4- Download the android app and place it under app/android or app/IOS

5- Start the mobile emulator device or the Appium Inspector using the Android or iOS capabilities specified in the configuration.

6- npm run wdioAndroid/wdioIOS

## Test results
Once the test is completed, a test results HTML file will be generated and saved in the '/reports/' directory. This report includes all test cases along with their pass/fail status and the reason for each outcome.

### Notes
* To manage node versions you can install "n" using the command "npm install -g n". Then you can install the version you may need, for instance "n 20.0.0"(LTS version where this project is working fine.)