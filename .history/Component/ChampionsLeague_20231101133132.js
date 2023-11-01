import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const ChampionsLeague = () => {
  return (
    <View style={styles.championsLeagueContainer}>
      <Image
        style={styles.tinyLogo}
        source={require("./Images/ChampionsLeague.png")}
      />
      <Text style={st}>
        Champions League
      </Text>
    </View>
  );
};

export default ChampionsLeague;

const styles = StyleSheet.create({
  tinyLogo: {
    width: 30,
    height: 30,
  },
  championsLeagueContainer: {
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  ChampionsText: {
    textAlign: "center",
    fontSize: 20,
  },
});
