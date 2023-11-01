import { StyleSheet, Text, View, Image, Touchable } from "react-native";
import React from "react";
import Teamdetails from "./TeamDetails";

export default function MatchDetails() {
  return (
    <View>
      <View style={styles.championsLeagueContainer}>
        <Image
          style={styles.tinyLogo}
          source={require("./Images/ChampionsLeague.png")}
        />
        <Text>ChampionLeague</Text>
      </View>
      <View style={styles.teamDetailsContainer}>
        <Teamdetails
          Half={"1st"}
          Date={"20-1-20"}
          Team={"Man U"}
          imagesource={require("./Images/manchester-united-logo.png")}
        />
        <View>
          <Text>Center</Text>
          <Text></Text>
          <Text>Center</Text>
          <Text>Center</Text>
        </View>
        <Teamdetails
          Half={"1st"}
          Date={"20-3-20"}
          Team={"Arsenal"}
          imagesource={require("./Images/Arsenal_FC.png")}
        />
      </View>
      <View>
        <Text>3</Text>
      </View>
      <View>
        <Text>4</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tinyLogo: {
    width: 20,
    height: 20,
  },
  championsLeagueContainer: {
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
  },
  teamDetailsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    gap: 50,
  },
  HomeLogo: {
    width: 100,
    height: 100,
  },
});
