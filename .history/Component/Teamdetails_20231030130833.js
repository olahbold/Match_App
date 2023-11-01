import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

 export defunction Teamdetails({ imagesource, Team, Half, Date }) {
  return (
    <View>
      <View>
        <Image style={styles.HomeLogo} source={imagesource} />
      </View>
      <View>
        <Text>{Team}</Text>
      </View>
      <View>
        <Text>{Half}</Text>
      </View>
      <View>
        <Text>{Date}</Text>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  HomeLogo: { width: 100, height: 100 },
});
