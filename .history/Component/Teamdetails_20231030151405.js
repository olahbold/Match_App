import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

export default function Teamdetails({ imagesource, Team, Half, Date }) {
  return (
    <View style={styles.teamdetailscontainer}>
      <View>
        <Image style={styles.homeLogo} source={imagesource} />
      </View>
      <View>
        <Text style={{ fontSize: 20, textAlign: "center" }}>{Team}</Text>
      </View>
      <View>
        <Text style={{ textAlign: "center" }}>{Half}</Text>
      </View>
      <View>
        <Text style={{ textAlign: "center" }}>{Date}</Text>
      </View>
    </View>
  );
}



const styles = StyleSheet.create({
  homeLogo: { width: 100, height: 100 },
  teamdetailscontainer: {
    alignContent: "center",
    justifyContent: "center",
    gap: 10,
    paddingHorizontal: 
  },
});
