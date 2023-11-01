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
import { button } from "./Data";
import MatchTime from "./MatchTime";

export default function MatchDetails() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.teamDetailsContainer}>
        <Teamdetails
          Half={"1st"}
          Date={"20-1-20"}
          Team={"Man Utd"}
          imagesource={require("./Images/manchester-united-logo.png")}
          starsource={require("./Images/ic_following.png")}
          Result="Winner"
          color="#00A79D"
          backgroundColor={"#CCEDEB"}
        />

        <MatchTime />

        <Teamdetails
          Half={"1st"}
          Date={"20-3-20"}
          Team={"Arsenal"}
          imagesource={require("./Images/Arsenal_FC.png")}
          starsource={require("./Images/Away.png")}
          Result="My Pick"
          color="#FF6868"
          backgroundColor={"#F1D3D3"}
        />
      </View>
      <View style={styles.buttonContainer}>
        {button.map((value, idx) => (
          <View>
            <TouchableOpacity>
              <Text style={{ fontSize: 18 }} key={idx}>
                {value}
              </Text>
            </TouchableOpacity>
          </View>
        ))}
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
  t
   
   
  }
  c
   
   
   
   
  }
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

  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    gap: 40,
    marginTop: 40,
  },
});
