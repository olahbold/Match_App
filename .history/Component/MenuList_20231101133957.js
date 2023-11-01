import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { button } from "./Data";
const MenuList = () => {
  return (
    <View style={styles.buttonContainer}>
      {button.map((value, idx) => (
        <View>
          <TouchableOpacity>
            <Text style={st} key={idx}>
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
  buttonText:{fontSize:18}
});
