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





********************************
**Credits for Images**
- <a href="https://www.flaticon.com/free-icons/indoor-plants" title="indoor plants icons">Indoor plants icons created by Flat Icons Design - Flaticon</a>

- <a href="https://www.flaticon.com/free-icons/cute" title="cute icons">Cute icons created by Rohim - Flaticon</a>

npx expo start --reset-cache.

**What's next**

