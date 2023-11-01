import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

export default function Teamdetails() {
  return (
    <View>
      <View>
        <View>
          <Image
            style={styles.HomeLogo}
            source={require("./Images/manchester-united-logo.png")}
          />
        </View>
        <View>
          <Text>Man U</Text>
        </View>
        <View>
          <Text>1st</Text>
        </View>
        <View>
          <Text>21-0-5</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  ho
});
