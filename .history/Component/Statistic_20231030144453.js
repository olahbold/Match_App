import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Statistic = () => {
  return (
    <View style={styles.StatisticContainer}>
      <View style= {styles.StatDetails}>
        <Text>43%</Text>
        <Text>Possession</Text>
        <Text>57%</Text>
      </View>
      < >
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
    marginTop: 40
  },
  StatDetails:{
    flexDirection:'row',
    justifyContent: 'space-between'
  }
});
