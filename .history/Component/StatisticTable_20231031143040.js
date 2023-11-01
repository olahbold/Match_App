import { StyleSheet, Text, View } from "react-native";
import React from "react";

const StatisticTable = (Home,Away,Title) => {
  return <View style={styles.StatDetails}><Text>{Home}</Text>
  <</View>;
};

export default StatisticTable;

const styles = StyleSheet.create({
  StatDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
