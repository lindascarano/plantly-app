import { theme } from "@/theme";
import { StyleSheet, Pressable, Text, Platform } from "react-native";
import * as Haptics from "expo-haptics";

type Props = {
  title: string;
  onPress: () => void;
};

export function PlanlyButton({ title, onPress }: Props) {
  const handlePressed = () => {
    if (Platform.OS !== "web") {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    }
    onPress();
  };
  return (
    <Pressable
      onPress={handlePressed}
      style={(state) => {
        if (state.pressed) {
          return [styles.button, styles.buttonPressed];
        }
        return styles.button;
      }}
    >
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colorGreen,
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 6,
  },
  buttonPressed: {
    backgroundColor: theme.colorLeafyGreen,
  },
  text: {
    color: theme.colorWhite,
    fontSize: 16,
    fontWeight: "bold",
  },
});
