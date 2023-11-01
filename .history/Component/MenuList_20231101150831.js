import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { button } from "./Data";
const MenuList = () => {
  const [isPressed, setIsPressed] = useState(Array(2).fill(false));

  const handlePressIn = (idx) => {
    const updatedIsPressed = [...isPressed];
    updatedIsPressed[idx] = true;
    setIsPressed(updatedIsPressed);
  };

  const handlePressOut = (idx) => {
    const updatedIsPressed = [...isPressed];
    updatedIsPressed[idx] = false;
    setIsPressed(updatedIsPressed);
  };
  return (
    <View style={styles.buttonContainer}>
      {button.map((value, idx) => (
        <View>
          <TouchableOpacity
                    onPress={button.onPress}

            onPressIn={handlePressIn(idx)}
            onPressOut={handlePressOut(idx)}
            underlayColor={isPressed[idx] ? "darkblue" : "blue"}
          >
            <Text
              style={[
                styles.buttonText,
                isPressed[idx] && styles.buttonPressed,
              ]}
              key={idx}
            >
              {value}
            </Text>
          </TouchableOpacity>
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
  buttonText: { fontSize: 18 },
  buttonPressed: {
    backgroundColor: "darkblue",
  },
});
