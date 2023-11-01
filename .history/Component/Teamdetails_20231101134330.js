import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

export default function Teamdetails({
  imagesource,
  starsource,
  Team,
  Half,
  Date,
  Result,
  color,
  backgroundColor,
}) {
  return (
    <View style={styles.teamdetailscontainer}>
      <View>
        <Image style={styles.starLogo} source={starsource} />
      </View>
      <View>
        <Image style={styles.homeLogo} source={imagesource} />
      </View>
      <View>
        <Text style={[styles.TeamDetailsText,{ fontSize: 20 }]}>{Team}</Text>
      </View>
      <View>
        <Text style={[styles.TeamDetailsText,{  color: "#808080" }]}>{Half}</Text>
      </View>
      <View>
        <Text style={[{ color: "#808080" }]}>{Date}</Text>
      </View>
      <View
        style={{
          backgroundColor: `${backgroundColor}`,
          borderRadius: 10,
          width: "100%",
          height: 20,
          paddingHorizontal: 5,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            color: `${color}`,
          }}
        >
          {Result}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  homeLogo: { width: 80, height: 80 },
  teamdetailscontainer: {
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    paddingHorizontal: 10,
    flexDirection: "column",
  },
  starLogo: {
    width: 40,
    height: 40,
    paddingVertical: 10,
  },
  TeamDetailsText:{ textAlign: 'center'}
});
