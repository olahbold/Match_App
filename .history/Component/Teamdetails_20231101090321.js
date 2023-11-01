import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

export default function Teamdetails({ imagesource,starsource, Team, Half, Date }) {
  return (
    <View style={styles.teamdetailscontainer}>
      <View>
        <Image style={styles.starLogo} source={starsource} />
      </View>
      <View>
        <Image style={styles.homeLogo} source={imagesource} />
      </View>
      <View>
        <Text style={{ fontSize: 20, textAlign: "center" }}>{Team}</Text>
      </View>
      <View>
        <Text style={{ textAlign: "center", color: "#808080" }}>{Half}</Text>
      </View>
      <View>
        <Text style={{ textAlign: "center", color: "#808080" }}>{Date}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  homeLogo: { width: 80, height: 80 },
  teamdetailscontainer: {
    alignContent: "center",
    justifyContent: "center",
    gap: 10,
    paddingHorizontal: 10,
  },
  starLogo:{
    width: 30,height: 30
  }
});
