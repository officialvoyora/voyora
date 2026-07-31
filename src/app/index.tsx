import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native"; import { router } from "expo-router";

export default function HomeScreen() {
  return (
    <View style={styles.container}>

      <Image
        source={require("../../assets/images/voyora-logo.png")}
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.title}>
        Welcome to Voyora
      </Text>

      <Text style={styles.subtitle}>
        Explore. Navigate. Connect.
      </Text>

      <TouchableOpacity
  style={styles.button}
  onPress={() => router.push("/home")}
>
  <Text style={styles.buttonText}>
    Get Started
  </Text>
</TouchableOpacity>

      <View style={styles.footer}>
        <Text style={styles.powered}>
          Powered by Voyora OS
        </Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    padding: 30,
  },

  logo: {
    width: 200,
    height: 200,
    marginBottom: 25,
  },

  title: {
    fontSize: 36,
    fontWeight: "700",
    color: "#111111",
    marginBottom: 12,
  },

  subtitle: {
    fontSize: 18,
    color: "#666666",
    textAlign: "center",
    marginBottom: 50,
  },

  button: {
    backgroundColor: "#00F5FF",
    paddingHorizontal: 52,
    paddingVertical: 17,
    borderRadius: 40,
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "600",
  },

  footer: {
    position: "absolute",
    bottom: 45,
    alignItems: "center",
  },

  powered: {
    color: "#999999",
    fontSize: 14,
    letterSpacing: 0.5,
  },
});
