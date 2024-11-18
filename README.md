npx create-expo-app plantly --template

Set up linting: 
npx expo lint
npx expo install -- --save-dev prettier eslint-config-prettier eslint-plugin-prettier eslint-plugin-react-native
and update your .eslintrc.js as follows:
module.exports = {
  extends: ["expo", "prettier"],
  plugins: ["prettier", "react-native"],
  rules: {
    "prettier/prettier": "error",
    "react-native/no-unused-styles": "error",
  },
};

Expo Router and other librerias: npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar

Set up the entry point: In your package.json change the entry point to "main": "expo-router/entry".

Add the scheme to your app.json:
{
  "expo": {
    "scheme": "plantly"
  }
}

Set up web : npx expo install react-native-web react-dom
In your app.json, set the web bundler to be metro: 
{
  "web": {
    "favicon": "./assets/favicon.png",
   "bundler": "metro"
  }
}

Button Tabs icon: npx expo install @expo/vector-icons

Path alias: https://www.typescriptlang.org/docs/handbook/modules/theory.html#module-resolution -> Update: tsconfig.json :
{
   "extends": "expo/tsconfig.base",
   "compilerOptions": {
    "strict": true,
    "paths": {
      "@/*": [
        "./*"
      ]
    }
   }
 }
After making these changes, close and reopen your editor and restart the metro bundler.

State Mnagement Library: npx expo install zustand

Persist onboarding state with Async Storage: 
npx expo install @react-native-async-storage/async-storage

Add haptic feedback: npx expo install expo-haptics

Status Bar library(if it doesn't exist yet): npx expo install expo-status-bar

Pick the Image: npx expo install expo-image-picker
image picker that lets you choose images both from the image Gallery as well a take a picture.


Store the image: npx expo install expo-file-system
Save the image when a new plant is added -> we need to also store it when we save the plant. It's not sufficient to simply store the uri we get from the image picker, because that storage is not guaranteed to persist. We'll need to copy the image to the document storage for the app so it will exist as long as the app is installed.


<a href="assets\ConvertScreenIntoStack.png">How to convert screen into stack</a>

Date formatting: npx expo install date-fns

**Development Build**
React Native app consists of two parts:

1 - the JavaScript bundle (which you build with npx expo start)
2 - the native app bundle (so far, Expo Go)

Because we've only been able to update the JavaScript part, we are limited to using only the libraries that exist in Expo Go. Admittedly there's quite a lot https://docs.expo.dev/versions/latest/ to get started with, but there will become a time you want to use something that isn't included, such as setting up in-app purchaces https://github.com/hyochan/react-native-iap , using react-native-vision-camera https://github.com/mrousavy/react-native-vision-camera  , analytics with react-native-firebase https://github.com/invertase/react-native-firebase or in our case, adding a quick action https://github.com/EvanBacon/expo-quick-actions.

And this is where Development Builds come in!

What is a Development Build?
Think of it as your own customizable version of Expo Go with just the native libraries you need installed. So you'll continue building the JavaScript bundle as before, we're just swapping out the native app bundle part and building it ourselves.

What we've done in this workshop is a pretty common workflow when starting a new app: you'll create a new project, do some prototyping, build some UI until you reach a point where Expo Go isn't enough. It makes sense to do this sooner rather than later, certainly before settling into a QA flow if you're building production apps.

Move from Expo Go -> Development Builds ->
Expo Go app has a pretty dev menu: npx expo install expo-dev-client
This is a package that use the same functionality as <a href="\assets\ExpoGoMenu.png">ExpoGo menu </a>

Now we need to generate our native projects for one or both platforms:
npx expo prebuild --platform ios 
npx expo prebuild --platform android


or: npx expo prebuild --platform android --clean

change in grandle.properties newArchEnabled=false

Build your native app: npx expo run:android





********************************
**Credits for Images**
- <a href="https://www.flaticon.com/free-icons/indoor-plants" title="indoor plants icons">Indoor plants icons created by Flat Icons Design - Flaticon</a>

- <a href="https://www.flaticon.com/free-icons/cute" title="cute icons">Cute icons created by Rohim - Flaticon</a>

npx expo start --reset-cache.

**What's next**

- Try to start th App in development build on my devicese. 

DONT COMMIT!!!!

- when I start on Emulator the name is now Plantly, on my physical device it is Annaffiami, as it should be... why??

- Make .apk