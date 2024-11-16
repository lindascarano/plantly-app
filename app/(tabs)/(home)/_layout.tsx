import { AntDesign } from "@expo/vector-icons";
import { Link, Stack, useRouter } from "expo-router";
import { Pressable } from "react-native";
import { theme } from "@/theme";

export default function Layout() {
  const router = useRouter();
  const onPress = () => {
    router.push("/new");
  };
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Home",
          headerRight: () => (
            <Link href="\new" asChild>
              <Pressable
                hitSlop={20}
                onPressIn={onPress}
                style={{ marginRight: 4 }}
              >
                <AntDesign
                  name="pluscircleo"
                  size={24}
                  color={theme.colorGreen}
                />
              </Pressable>
            </Link>
          ),
        }}
      />
      <Stack.Screen
        name="plants/[plantId]"
        options={{
          title: "",
          headerTintColor: theme.colorBlack,
        }}
      />
    </Stack>
  );
}
