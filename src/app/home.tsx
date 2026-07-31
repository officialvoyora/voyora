import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>

      <Text style={styles.logo}>VOYORA</Text>

      <TextInput
        placeholder="Where do you want to go?"
        placeholderTextColor="#777"
        style={styles.search}
      />

      <View style={styles.section}>
        <Text style={styles.heading}>Explore</Text>
        <Text style={styles.description}>
          Discover destinations, attractions and experiences.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>Navigate</Text>
        <Text style={styles.description}>
          Maps, routes and transportation.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>Connect</Text>
        <Text style={styles.description}>
          Meet guides, businesses and fellow travelers.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>Traveler's Hub</Text>
        <Text style={styles.description}>
          Everything a traveler needs in one place.
        </Text>
      </View>

      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Coming Soon</Text>
      </Pressable>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: 24,
  },

  logo: {
    fontSize: 34,
    fontWeight: "700",
    color: "#00F5FF",
    marginTop: 60,
    marginBottom: 30,
    alignSelf: "center",
  },

  search: {
    height: 55,
    borderWidth: 1,
    borderColor: "#E5E5E5",
    borderRadius: 14,
    paddingHorizontal: 18,
    fontSize: 16,
    marginBottom: 30,
  },

  section: {
    marginBottom: 24,
  },

  heading: {
    fontSize: 22,
    fontWeight: "700",
    color: "#111",
  },

  description: {
    marginTop: 6,
    fontSize: 15,
    color: "#666",
    lineHeight: 22,
  },

  button: {
    marginTop: 20,
    backgroundColor: "#00F5FF",
    borderRadius: 14,
    paddingVertical: 16,
    alignItems: "center",
  },

  buttonText: {
    color: "#000",
    fontWeight: "700",
    fontSize: 17,
  },
});