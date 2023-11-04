import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Alert,
  Platform,
} from "react-native";

const App = () => {
  const handlePress = () => {
    // Simple cross-platform compatible alert
    if (Platform.OS === "web") {
      alert("You're using your very first React Native app!");
    } else {
      Alert.alert("Welcome!", "You're using your very first React Native app!");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>My Cool App</Text>
      <Text style={styles.welcome}>
        Welcome to your first React Native app!
      </Text>
      <TouchableOpacity onPress={handlePress} style={styles.button}>
        <Text style={styles.buttonText}>Click Me</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  welcome: {
    fontSize: 18,
    textAlign: "center",
    marginHorizontal: 20,
    marginBottom: 20,
    color: "#555",
  },
  button: {
    backgroundColor: "#007bff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
});

export default App;
