import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Teamdetails from "./TeamDetails";
import Statistic from "./Statistic";

export default function MatchDetails() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.championsLeagueContainer}>
        <Image
          style={styles.tinyLogo}
          source={require("./Images/ChampionsLeague.png")}
        />
        <Text style={{ textAlign: "center", fontSize: 20 }}>
          Champions League
        </Text>
      </View>
      <View style={styles.teamDetailsContainer}>
        <Teamdetails
          Half={"1st"}
          Date={"20-1-20"}
          Team={"Man Utd"}
          imagesource={require("./Images/manchester-united-logo.png")}
        />
        <View style={styles.MatchTime}>
          <Text style={{ textAlign: "center", color: "#808080" }}>
            21.10.2022 13:00
          </Text>
          <Text style={{ textAlign: "center", fontSize: 30 }}>2 - 1</Text>
          <Text style={{ textAlign: "center", color: "#808080" }}>
            (Agg 4-3)
          </Text>
          <Text style={{ color: "red", textAlign: "center" }}>Finished</Text>
        </View>
        <Teamdetails
          Half={"1st"}
          Date={"20-3-20"}
          Team={"Arsenal"}
          imagesource={require("./Images/Arsenal_FC.png")}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity>
          <Text style={fon}>Details</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Stats</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Line ups</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>H2H</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Statistic />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
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
  teamDetailsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    gap: 20,
    marginTop: 20,
  },
  HomeLogo: {
    width: 100,
    height: 100,
  },
  MatchTime: {
    gap: 5,
    marginTop: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    gap: 40,
    marginTop: 40,
  },
});
