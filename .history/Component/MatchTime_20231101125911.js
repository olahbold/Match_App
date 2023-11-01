import { StyleSheet, Text, View } from "react-native";
import React from "react";

const MatchTime = () => {
  return (
    <View style ={styles.MatchTime}>
      <Text style={{ textAlign: "center", color: "#808080" }}>
        21.10.2022 13:00
      </Text>
      <Text style={{ textAlign: "center", fontSize: 30 }}>2 - 1</Text>
      <Text style={{ textAlign: "center", color: "#808080" }}>(Agg 4-3)</Text>
      <Text style={{ color: "red", textAlign: "center" }}>Finished</Text>
    </View>
  );
};

export default MatchTime;

const styles = StyleSheet.create({
  MatchTime: {
    gap: 5,
    marginTop: 40,
  },
});
