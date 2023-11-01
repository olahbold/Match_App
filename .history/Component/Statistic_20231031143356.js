import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { data } from "./Data";
import StatisticTable from "./StatisticTable";

const Statistic = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const currentStats = data[currentIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.StatisticContainer}>
      <StatisticTable Home={currentStats.PH} Away={currentStats} Title={}/>
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

export default Statistic;

const styles = StyleSheet.create({
  StatisticContainer: {
    flexDirection: "column",
    marginTop: 40,
    gap: 20,
    paddingHorizontal: 20,
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
