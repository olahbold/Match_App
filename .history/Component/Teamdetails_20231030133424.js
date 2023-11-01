import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

export default function Teamdetails({ imagesource, Team, Half, Date }) {
  return (
    <View style={styles.TeamdetailsContainer}>
      <View>
        <Image style={styles.HomeLogo} source={imagesource} />
      </View>
      <View>
        <Text style= {{fontSize: 20, textAlign:'center'}}>{Team}</Text>
      </View>
      <View>
        <Text style ={{textAlign:'center'}}>{Half}</Text>
      </View>
      <View>
        <Text style ={{textAlign:'center'}}>{Date}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  HomeLogo: { width: 100, height: 100 },
  TeamdetailsContainer: {
    alignContent: "center",
    justifyContent: "center",
    gap: 10
  },
});
