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

********************************
npx expo start --reset-cache.