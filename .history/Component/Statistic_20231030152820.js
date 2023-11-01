import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Statistic = () => {
  return (
    <View style={styles.StatisticContainer}>
      <View style={styles.StatDetails}>
        <Text>43%</Text>
        <Text>Possession</Text>
        <Text>57%</Text>
      </View>
      <View style={styles.barContainer}>
        <View style={{ height:15,width: '60%', backgroundColor: "#0099FF" }}/>
        <View style={{ height:15,width: '40%', backgroundColor: "#FC5555",bo }}/>
      </View>
    </View>
  );
};

export default Statistic;

const styles = StyleSheet.create({
  StatisticContainer: {
    flexDirection: "column",
    marginTop: 40,
    gap: 20,
    paddingHorizontal:20
  },
  StatDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  barContainer: {
    width: "80%",
    flexDirection: 'row',
    gap: 2,
    justifyContent:'center',
    alignItems:'center'
  }
});
