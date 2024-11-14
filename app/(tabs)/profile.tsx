import { Text, View, StyleSheet, Button } from "react-native";
import { theme } from "@/theme";
import { useUserStore } from "@/store/useStore";

export default function PofileScreen() {
  const toggleHasOnboarded = useUserStore((store) => store.toggleHasOnboarded);
  return (
    <View style={styles.counter}>
      <Text style={styles.text}>Profile</Text>
      <Button
        title="Torna allo Screen Onboarding"
        onPress={toggleHasOnboarded}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  counter: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colorWhite,
  },
  text: {
    fontSize: 24,
  },
});
