import { PlanlyButton } from "@/components/PlantlyButton";
import { useUserStore } from "@/store/useStore";
import { theme } from "@/theme";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { Text, StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { PlantlyImage } from "@/components/PlantlyImage";

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
      colors={[theme.colorGreen, theme.colorAppleGreen, theme.colorLightYellow]}
      style={styles.container}
    >
      <StatusBar style="light" />
      <View>
        <Text style={styles.heading}>Annaffia</Text>
        <Text style={styles.text}>
          Mantieni le tue piante in salute e ben idratate!
        </Text>
      </View>
      <PlantlyImage />
      {/* <Text style={styles.text}>Onboarding</Text> */}
      <PlanlyButton title={"Fammi entrare!"} onPress={handlePress} />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: theme.colorWhite,
  },
  heading: {
    fontSize: 42,
    color: theme.colorWhite,
    fontWeight: "bold",
    marginBottom: 12,
    textAlign: "center",
  },
  text: {
    fontSize: 24,
    color: theme.colorWhite,
    textAlign: "center",
    marginHorizontal: 24,
    textTransform: "capitalize",
  },
});
