
# Zoftify Test

## Description

A brief description of your project, including its purpose and what it aims to achieve.

## Table of Contents

1. [Installation](#installation)
2. [Running the App](#running-the-app)
3. [Project Structure](#project-structure)
4. [Dependencies](#dependencies)
5. [Configuration](#configuration)
6. [Contributing](#contributing)
7. [License](#license)

## Installation

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/en/) (version 18.17.1 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Watchman](https://facebook.github.io/watchman/) (For macOS)
- [Android Studio](https://developer.android.com/studio) for Android Development
- [Xcode](https://developer.apple.com/xcode/) for iOS Development (macOS only)
- [React Native CLI](https://reactnative.dev/docs/environment-setup)

### Clone the Repository

```bash
git clone https://github.com/levonaparyan/zoftify_test.git
cd zoftify_test
```

### Install Dependencies

Run the following command to install all required dependencies:

```bash
npm install
# or
yarn install
```

### Additional Setup

- If you are building for **iOS**:

```bash
cd ios/
pod install
cd ..
```

- If you are building for **Android**, ensure that the necessary environment variables for the Android SDK are set.

### Environment Variables

Create a `.env` file in the root of your project and add the required environment variables:

```bash
API_URL=https://yourapi.com
ANOTHER_KEY=your_value
```

## Running the App

### iOS

To run the app on an iOS simulator:

```bash
npx react-native run-ios
```

Alternatively, you can open the `ios/ZoftifyTest.xcworkspace` file in Xcode and run it from there.

### Android

To run the app on an Android emulator or connected device:

```bash
npx react-native run-android
```

Make sure you have an Android Virtual Device (AVD) running, or an Android device connected via USB.

### Metro Bundler

The Metro bundler should automatically start when you run the app. If it doesn't, you can start it manually:

```bash
npx react-native start
```

## Project Structure

A brief explanation of the project's folder structure:

```
/android        - Android-specific code
/ios            - iOS-specific code
/src            - Contains the app's source code
    /components - Reusable components
    /screens    - Screens for the app
    /redux      - Redux-related files (reducers, actions, store)
    /assets     - Static assets (images, fonts, etc.)
/test           - Contains test files
```

## Dependencies

List the key dependencies your app uses. You can generate this with:

```bash
npm list --depth=0
```

### Example:

- React: `18.0.0`
- React Native: `0.74.1`
- Redux: `4.2.0`
- React Navigation: `6.x`

## Configuration

### Android

For Android development, ensure that:

- Android SDK is installed.
- Set up the `local.properties` file with the path to your Android SDK.

```bash
sdk.dir=/Users/username/Library/Android/sdk
```

### iOS

For iOS development, ensure that:

- Xcode is installed and up to date.
- CocoaPods is installed to manage iOS dependencies.

```bash
sudo gem install cocoapods
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
