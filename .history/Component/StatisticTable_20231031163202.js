import { StyleSheet, Text, View } from "react-native";
import React from "react";

const StatisticTable = ({ Home, Away, Title, HomeWidth, AwayWidth }) => {
  return (
    <View>
      <View style={styles.StatDetails}>
        <Text>{Home}</Text>
        <Text>{Title}</Text>
        <Text>{Away}</Text>
      </View>
      <View style={styles.barContainer}>
        <View
          style={[
            styles.bar,
            { width: `${HomeWidth}%`, backgroundColor: "#0099FF" , flex:1},
          ]}
        />
        <View
          style={[
            styles.bar,
            { width: `${0}%`, backgroundColor: "#FC5555" ,flex: 1},
          ]}
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
    width: "100%",
    flexDirection: "row",
    flex: 1,
    gap: 5,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
    marginTop: 20,
  },
  bar: {
    height: 10,
     borderRadius: 5,
  },
});
