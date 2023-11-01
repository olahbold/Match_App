import { StyleSheet, Text, View } from "react-native";
import React from "react";

const StatisticTable = ({ Home, Away, Title,HomeWidth }) => {
  return (
    <View>
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
    </View>
  );
};

export default StatisticTable;

const styles = StyleSheet.create({
  StatDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  barContainer: {
    width: "80%",
    flexDirection: "row",
    gap: 5,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 40,
  },
});
