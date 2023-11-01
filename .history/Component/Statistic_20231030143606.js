import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Statistic = () => {
  return (
    <View style={styles.StatisticContainer}>
      <View style= >
        <Text>43%</Text>
        <Text>Possession</Text>
        <Text>57%</Text>
      </View>
      <View>
        <View></View>
        <View></View>
      </View>
    </View>
  );
};

export default Statistic;

const styles = StyleSheet.create({
  StatisticContainer:{
    flexDirection : 'column',
    justifyContent:'space-between',
    alignItems: 'center'
  }
});
