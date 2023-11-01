import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React,{useState}from "react";
import { button } from "./Data";
const MenuList = () => {
  const [isPressed, setIsPressed] = useState(false);

  const handlePressIn = () => {
    setIsPressed(true);
  };

  const handlePressOut = () => {
    setIsPressed(false);
  };
  return (
    <View style={styles.buttonContainer}>
      {button.map((value, idx) => (
        <View>
          <TouchableOpacity
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
            underlayColor={isPressed ? "darkblue" : "blue"}
          >
            <Text style={styles.buttonText} key={idx}>
              {}
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
