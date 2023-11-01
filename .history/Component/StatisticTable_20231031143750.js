import { StyleSheet, Text, View } from "react-native";
import React from "react";

const StatisticTable = ({Home, Away, Title}) => {
  return (
    <View style={styles.StatDetails}>
      <Text>{Home}</Text>
      <Text>{Title}</Text>
      <Text>{Away}</Text>
    </View>
        <View style={styles.barContainer}>
        <View
          style={{
            height: 10,
            width: `${currentStats.PH}%`,
            backgroundColor: "#0099FF",
            borderRadius: 5,
          }}
        />
        <View
          style={{
            height: 10,
            width: `${currentStats.PA}%`,
            backgroundColor: "#FC5555",
            borderRadius: 5,
          }}
        />
      </View>
  );
};

export default StatisticTable;

const styles = StyleSheet.create({
  StatDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
