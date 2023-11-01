import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { button } from "./Data";
const MenuList = () => {
  const [isPressed, setIsPressed] = useState([]);
  const Pressed =(index)=>{
    alert(`Button`)

  }

  return (
    <View style={styles.buttonContainer}>
      {button.map((value, idx) => (
        <View>
          <TouchableOpacity onPress={ ()=>{console}}>
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
