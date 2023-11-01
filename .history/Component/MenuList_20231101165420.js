import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import React, { useState } from "react";
import { button } from "./Data";

const MenuList = () => {
  const [isPressed, setIsPressed] = useState(null);
  const HandlePress = (index) => {
    setIsPressed(index);
  };
  const handlePressOut = (index) => {
    setIsPressed(null);
  };

  return (
    <View style={styles.buttonContainer}>
      {button.map((value, idx) => (
        <View>
          <TouchableHighlight
            onPressOut={handlePressOut}
            onPress={() => {
              HandlePress(idx);
            }}
          >
            <Text
              key={idx}
              style={[styles.button, isPressed === idx && styles.buttonPressed]}
            >
              {value}
            </Text>
          </TouchableHighlight>
        </View>
      ))}
    </View>
  );
};

export default MenuList;

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    gap: 40,
    marginTop: 40,
  },
  buttonText: { fontSize: 18, textAlign: "center" },
  button: {
    padding: 10,
  },
  buttonPressed: {
    backgroundColor: "#00A79D",
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
  },
});
