import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

function Teamdetails() {
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
          <Text>{Team}</Text>
        </View>
        <View>
          <Text>{Half}</Text>
        </View>
        <View>
          <Text>21-0-5</Text>
        </View>
      </View>
    
    </View>
  );
}
export default Teamdetails;

const styles = StyleSheet.create({
  HomeLogo: { width: 100, height: 100 },
});
