import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{ headerShown: false, animation: "fade" }}
      ></Stack.Screen>
      <Stack.Screen
        name="onboarding"
        options={{
          presentation: "modal",
          headerShown: false,
          animation: "fade",
        }}
      ></Stack.Screen>
      <Stack.Screen
        name="new"
        options={{ presentation: "modal", title: "Nuova Pianta" }}
      ></Stack.Screen>
    </Stack>
  );
}
