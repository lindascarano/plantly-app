import { useUserStore } from "@/store/useStore";
import { theme } from "@/theme";
import { useRouter } from "expo-router";
import { View, Text, StyleSheet, Button } from "react-native";

// Toggle the onboarding state from the onboarding modal and redirect to home
export default function OndboardingScreen() {
  const router = useRouter();
  const toggleHasOnborded = useUserStore((state) => state.toggleHasOnboarded);

  const handlePress = () => {
    toggleHasOnborded();
    router.replace("/");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Onboarding</Text>
      <Button title="Fammi entrare nell' app" onPress={handlePress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colorWhite,
  },
  text: {
    fontSize: 24,
  },
});
