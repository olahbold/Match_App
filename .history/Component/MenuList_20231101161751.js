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
  const [isPressed, setIsPressed] = useState([]);
  const handlePressIn = (index) => {
    setIsPressed(index)
  };
  const handlePressOut = (index) => {
    setIsPressed(index)
  };
  return (
    <View style={styles.buttonContainer}>
      {button.map((value, idx) => (
        <View>
          <TouchableHighlight key={idx} onPress={() => Pressed(idx)} >
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
