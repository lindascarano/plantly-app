import { PlantlyButton } from "@/components/PlantlyButton";
import { PlantlyImage } from "@/components/PlantlyImage";
import { usePlantStore } from "@/store/plantsStore";
import { theme } from "@/theme";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  Alert,
} from "react-native";

export default function NewScreen() {
  const router = useRouter();
  const addPlant = usePlantStore((state) => state.addPlant);
  const [name, setName] = useState<string>();
  const [days, setDays] = useState<string>();

  const handleSubmit = () => {
    if (!name) {
      return Alert.alert(
        "Prima di procedere",
        "Aggiungi il nome della tua nuova pianta!",
      );
    }

    if (!days) {
      return Alert.alert(
        "Prima di procedere",
        "Aggiungi la frequenza di annaffio!",
      );
    }

    if (Number.isNaN(Number(days))) {
      return Alert.alert(
        "Prima di procedere",
        "Inserisci un numero valido come frequenza di annaffio!",
      );
    }

    addPlant(name, Number(days));
    router.navigate("/");
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      keyboardShouldPersistTaps="handled"
    >
      <View style={styles.centered}>
        <PlantlyImage />
      </View>
      <Text style={styles.label}>Nome della pianta</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        style={styles.input}
        placeholder="Es. Orchidea"
        autoCapitalize="words"
      />
      <Text style={styles.label}>Frequenza di annaffio</Text>
      <TextInput
        value={days}
        onChangeText={setDays}
        style={styles.input}
        placeholder="Es. 7"
        keyboardType="number-pad"
      />
      <PlantlyButton title="Add Nuova Pianta!" onPress={handleSubmit} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colorWhite,
  },
  contentContainer: {
    paddingTop: 24,
    paddingBottom: 300,
    paddingHorizontal: 24,
  },
  input: {
    borderWidth: 2,
    borderColor: theme.colorLightGray,
    padding: 12,
    borderRadius: 6,
    marginBottom: 24,
    fontSize: 18,
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
    color: theme.colorLeafyGreen,
  },
  centered: {
    alignItems: "center",
    paddingBottom: 24,
  },
});
