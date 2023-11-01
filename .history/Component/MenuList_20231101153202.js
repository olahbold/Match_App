import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { button } from "./Data";
const MenuList = () => {
  const [isPressed, setIsPressed] = useState(false);

  const handlePressIn = (idx) => {
    setIsPressed((prevIsPressed) => {
      const updatedIsPressed = [...prevIsPressed];
      updatedIsPressed[idx] = true;
      return updatedIsPressed;
  };

  const handlePressOut = (idx) => {
    setIsPressed((prevIsPressed) => {
      const updatedIsPressed = [...prevIsPressed];
      updatedIsPressed] = false;
      return updatedIsPressed;
    });
  };
  return (
    <View style={styles.buttonContainer}>
      {button.map((value, idx) => (
        <View>
          <TouchableOpacity
            onPressIn={handlePressIn(idx)}
            onPressOut={handlePressOut(idx)}
            underlayColor={isPressed[idx] ? "darkblue" : "blue"}
          >
            <Text
              style={[
                styles.buttonText,
                { backgroundColor: isPressed[idx] && "darkblue" },
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
});
