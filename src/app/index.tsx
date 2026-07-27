import { View, Text, StyleSheet, Image } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/voyora-logo.png")}
        style={styles.logo}
      />


      <Text style={styles.tagline}>
        Explore • Navigate • Connect
      </Text>

      <Text style={styles.footer}>
        Powered by Voyora OS
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
  },

  logo: {
    width: 120,
    height: 120,
    resizeMode: "contain",
    marginBottom: 25,
  },

  title: {
    fontSize: 34,
    fontWeight: "700",
    letterSpacing: 8,
    color: "#111111",
  },

  tagline: {
    marginTop: 15,
    fontSize: 18,
    color: "#555",
    letterSpacing: 1,
  },

  footer: {
    position: "absolute",
    bottom: 45,
    color: "#999",
    fontSize: 14,
  },
});