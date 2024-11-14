import { Text, View, StyleSheet } from "react-native";
import { theme } from "@/theme";

export default function PofileScreen() {
  return (
    <View style={styles.counter}>
      <Text style={styles.text}>Profile</Text>
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
