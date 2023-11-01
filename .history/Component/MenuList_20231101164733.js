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
  buttonText: { fontSize: 18,textAlign: 'center',borderRadius: 40 },
  buttonPressed: {
    backgroundColor: "#00A79D",
    width: "100%",
    height: 30,
    paddingHorizontal: 20,
    borderRadius: 5
  },
});
