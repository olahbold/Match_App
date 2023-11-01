import { StyleSheet, Text, View } from "react-native";
import React from "react";

const MenuList = () => {
  return (
    <View style={styles.buttonContainer}>
      {button.map((value, idx) => (
        <View>
          <TouchableOpacity>
            <Text style={{ fontSize: 18 }} key={idx}>
              {value}
            </Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

export default MenuList;

const styles = StyleSheet.create({});
