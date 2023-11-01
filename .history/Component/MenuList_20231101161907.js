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
  const handlePressIn = (index) => {
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
            key={idx}
            onPress={() => Pressed(idx)}
            onPress={() => handlePress(index)}
            onPressIn={() => handlePressIn(index)}
            onPressOut={handlePressOut}
          >
            <Text
              style={[
                styles.buttonText,
                { backgroundColor: isPressed[idx] && "darkblue" },
              ]}
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
  buttonText: { fontSize: 18 },
});
