
Detailed documentation on how to run and publish to both Google Play Store and Apple Appstore.

## Table of Contents

//Generating an upload key

* [Run and Publish to Google Play Store](#run-and-publish-to-google-play-store)
  * [Generating an upload key](#generating-an-upload-key)
    * [Windows)](#windows)
    * [MacOS](#macos)
  * [Setting up Gradle variables](#setting-up-gradle-variables)
  * [Adding signing config to your app's Gradle config](#adding-signing-config-to-your-app's-gradle-config)
  * [Generating the release AAB](#generating-the-release-aab)
  * [Testing the release build of your app](#testing-the-release-build-of-your-app)
* [Run and Publish to Apple App Store](#run-and-publish-to-apple-app-store)
  * [Enable App Transport Security](#enable-app-transport-security)
  * [Configure release scheme](#configure-release-scheme)
  * [Build app for release](#build-app-for-release)
  * [npm run android](#npm-run-android)

## Run and Publish to Google Play Store

In order to distribute your Android application via Google Play store it needs to be signed with a release key that then needs to be used for all future updates. Let's go through the process.

### Generating an upload key

You can generate a private signing key using keytool.

#### Windows

On Windows, keytool must be run from C:\Program Files\Java\jdkx.x.x_x\bin.

```
keytool -genkeypair -v -storetype PKCS12 -keystore my-upload-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000
```

This command prompts you for passwords for the keystore and key and for the Distinguished Name fields for your key. It then generates the keystore as a file called my-upload-key.keystore.

The keystore contains a single key, valid for 10000 days. The alias is a name that you will use later when signing your app, so remember to take note of the alias.

#### MacOS

On macOS, if you're not sure where your JDK bin folder is, then perform the following command to find it:

```
/usr/libexec/java_home
```

It will output the directory of the JDK.

Navigate to that directory by using the command cd /your/jdk/path and use the keytool command with sudo permission as shown below.

```
sudo keytool -genkey -v -keystore my-upload-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000
```
### Setting up Gradle variables

1. Place the my-upload-key.keystore file under the android/app directory in your project folder.
2. Edit the file ~/.gradle/gradle.properties or android/gradle.properties, and add the following (replace ***** with the correct keystore password, alias and key password),

```
MYAPP_UPLOAD_STORE_FILE=my-upload-key.keystore
MYAPP_UPLOAD_KEY_ALIAS=my-key-alias
MYAPP_UPLOAD_STORE_PASSWORD=*****
MYAPP_UPLOAD_KEY_PASSWORD=*****
```

## Adding signing config to your app's Gradle config

The last configuration step that needs to be done is to setup release builds to be signed using upload key. Edit the file android/app/build.gradle in your project folder, and add the signing config,

```
...
android {
    ...
    defaultConfig { ... }
    signingConfigs {
        release {
            if (project.hasProperty('MYAPP_UPLOAD_STORE_FILE')) {
                storeFile file(MYAPP_UPLOAD_STORE_FILE)
                storePassword MYAPP_UPLOAD_STORE_PASSWORD
                keyAlias MYAPP_UPLOAD_KEY_ALIAS
                keyPassword MYAPP_UPLOAD_KEY_PASSWORD
            }
        }
    }
    buildTypes {
        release {
            ...
            signingConfig signingConfigs.release
        }
    }
}
...
```

## Generating the release AAB

Run the following in a terminal:
The keystore contains a single key, valid for 10000 days. The alias is a name that you will use later when signing your app, so remember to take note of the alias.

```
cd android
./gradlew bundleRelease
```

Gradle's bundleRelease will bundle all the JavaScript needed to run your app into the AAB ([Android App Bundle](https://developer.android.com/guide/app-bundle)). If you need to change the way the JavaScript bundle and/or drawable resources are bundled (e.g. if you changed the default file/folder names or the general structure of the project), have a look at android/app/build.gradle to see how you can update it to reflect these changes.

The generated AAB can be found under android/app/build/outputs/bundle/release/app-release.aab, and is ready to be uploaded to Google Play Store.


## Testing the release build of your app

Before uploading the release build to the Play Store, make sure you test it thoroughly. First uninstall any previous version of the app you already have installed. Install it on the device using the following command in the project root:

```
npx react-native run-android --variant=release
```
