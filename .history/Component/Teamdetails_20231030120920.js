import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Teamdetails = () => {
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
};

export  Teamdetails;

const styles = StyleSheet.create({});
