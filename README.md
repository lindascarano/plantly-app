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


********************************
npx expo start --reset-cache.

**What's next**

- Layout Groups -> Add the onboarding screen