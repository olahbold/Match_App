import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { button } from "./Data";
const MenuList = () => {
  const [isPressed, setIsPressed] = useState([]);
  const Pressed =(index)=>{
    alert(`Button ${index + 1} pressed`)

  }

  return (
    <View style={styles.buttonContainer}>
      {button.map((value, idx) => (
        <View>
          <TouchableOpacity  key={idx}  onPress={Pressed}>
            <Text
              style={[
                styles.buttonText,
                { backgroundColor: isPressed[idx] && "darkblue" },
              ]}
            
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
