import { StyleSheet, Text, View, Image, Touchable } from "react-native";
import React from "react";

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
        <View>
          <View>
            <Image
              style={}
              source={require("./Images/manchester-united-logo.png")}
            />
          </View>
          <View>
            <Text>hi</Text>
          </View>
          <View>
            <Text>hi</Text>
          </View>
          <View>
            <Text>hi</Text>
          </View>
        </View>
        <View></View>
        <View></View>
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
  },
});
