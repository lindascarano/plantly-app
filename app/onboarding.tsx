import { PlanlyButton } from "@/components/PlantlyButton";
import { useUserStore } from "@/store/useStore";
import { theme } from "@/theme";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { Text, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";

// Toggle the onboarding state from the onboarding modal and redirect to home
export default function OndboardingScreen() {
  const router = useRouter();
  const toggleHasOnborded = useUserStore((state) => state.toggleHasOnboarded);

  const handlePress = () => {
    toggleHasOnborded();
    router.replace("/");
  };
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      colors={[theme.colorGreen, theme.colorAppleGreen, theme.colorLimeGreen]}
      style={styles.container}
    >
      <StatusBar style="light" />
      <Text style={styles.text}>Onboarding</Text>
      <PlanlyButton title={"Fammi entrare nell'App"} onPress={handlePress} />
    </LinearGradient>
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
